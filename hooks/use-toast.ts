
"use client";

import * as React from "react";
import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5_000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

type ToastInput = Omit<ToasterToast, "id">;

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type Action =
  | { type: typeof actionTypes.ADD_TOAST; toast: ToasterToast }
  | {
      type: typeof actionTypes.UPDATE_TOAST;
      toast: Partial<ToasterToast> & { id: string };
    }
  | { type: typeof actionTypes.DISMISS_TOAST; toastId?: string }
  | { type: typeof actionTypes.REMOVE_TOAST; toastId?: string };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<
  string,
  ReturnType<typeof setTimeout>
>();

const listeners = new Set<() => void>();

let memoryState: State = { toasts: [] };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(
          0,
          TOAST_LIMIT,
        ),
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.toast.id
            ? { ...toast, ...action.toast }
            : toast,
        ),
      };

    case actionTypes.DISMISS_TOAST: {
      const ids = action.toastId
        ? [action.toastId]
        : state.toasts.map((toast) => toast.id);

      ids.forEach((id) => {
        if (state.toasts.some((toast) => toast.id === id)) {
          if (!toastTimeouts.has(id)) {
            const timeout = setTimeout(() => {
              toastTimeouts.delete(id);
              dispatch({
                type: actionTypes.REMOVE_TOAST,
                toastId: id,
              });
            }, TOAST_REMOVE_DELAY);

            toastTimeouts.set(id, timeout);
          }
        }
      });

      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          ids.includes(toast.id)
            ? { ...toast, open: false }
            : toast,
        ),
      };
    }

    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        toastTimeouts.forEach(clearTimeout);
        toastTimeouts.clear();

        return { ...state, toasts: [] };
      }

      if (toastTimeouts.has(action.toastId)) {
        clearTimeout(toastTimeouts.get(action.toastId)!);
        toastTimeouts.delete(action.toastId);
      }

      return {
        ...state,
        toasts: state.toasts.filter(
          (toast) => toast.id !== action.toastId,
        ),
      };

    default:
      return state;
  }
}

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return memoryState;
}

function toast({ ...props }: ToastInput) {
  const id = genId();

  const update = (nextProps: Partial<ToastInput>) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...nextProps, id },
    });

  const dismiss = () =>
    dispatch({
      type: actionTypes.DISMISS_TOAST,
      toastId: id,
    });

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, dismiss, update };
}

export function useToast() {
  const state = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getSnapshot,
  );

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({
        type: actionTypes.DISMISS_TOAST,
        toastId,
      }),
  };
}

export { toast };
