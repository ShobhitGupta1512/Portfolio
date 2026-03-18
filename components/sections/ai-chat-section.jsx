"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { RiChatVoiceAiFill } from "react-icons/ri"
import { FcLink } from "react-icons/fc"
import { GiAchievement } from "react-icons/gi"
import { FaLaptopCode } from "react-icons/fa"
import { GoStack } from "react-icons/go"

const SUGGESTED = [
  { icon: <FaLaptopCode />, text: "Is Shobhit available to hire?" },
  { icon: <GoStack />,      text: "What's his tech stack?" },
  { icon: <GiAchievement />,text: "Tell me his achievements" },
  { icon: <FcLink />,       text: "Share his GitHub & LinkedIn" },
]

/* ─── Markdown component map ─── */
const MarkdownComponents = {
  h1: ({ children }) => (
    <h1 style={{ fontSize:"18px", fontWeight:800, color:"#fff", margin:"0 0 10px", paddingBottom:"8px", borderBottom:"1px solid rgba(139,92,246,0.2)", letterSpacing:"-0.02em" }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 style={{ fontSize:"16px", fontWeight:700, color:"#e2e8f0", margin:"16px 0 8px", display:"flex", alignItems:"center", gap:"6px" }}>
      <span style={{ width:"3px", height:"16px", background:"linear-gradient(#7c3aed,#0ea5e9)", borderRadius:"99px", display:"inline-block", flexShrink:0 }} />
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 style={{ fontSize:"11px", fontWeight:600, color:"#c4b5fd", margin:"12px 0 6px", textTransform:"uppercase", letterSpacing:"0.06em" }}>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p style={{ margin:"0 0 10px", lineHeight:"1.75", color:"rgba(255,255,255,0.82)", fontSize:"13.5px" }}>
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul style={{ margin:"6px 0 12px", paddingLeft:"0", listStyle:"none", display:"flex", flexDirection:"column", gap:"5px" }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol style={{ margin:"6px 0 12px", paddingLeft:"18px", display:"flex", flexDirection:"column", gap:"5px" }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li style={{ display:"flex", alignItems:"flex-start", gap:"8px", color:"rgba(255,255,255,0.8)", fontSize:"13.5px", lineHeight:"1.65" }}>
      <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#7c3aed", flexShrink:0, marginTop:"8px" }} />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong style={{ fontWeight:700, color:"#c4b5fd", background:"rgba(139,92,246,0.1)", padding:"0 4px", borderRadius:"4px" }}>
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em style={{ color:"rgba(255,255,255,0.65)", fontStyle:"italic" }}>{children}</em>
  ),
  a: ({ href, children }) => (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      style={{ color:"#60a5fa", textDecoration:"none", borderBottom:"1px solid rgba(96,165,250,0.4)", paddingBottom:"1px", transition:"all 0.2s" }}
    >
      {children}
    </a>
  ),
  code: ({ inline, children }) => inline ? (
    <code style={{ background:"rgba(139,92,246,0.18)", color:"#c4b5fd", padding:"2px 8px", borderRadius:"5px", fontSize:"12px", fontFamily:"'Fira Code', 'Cascadia Code', monospace", border:"1px solid rgba(139,92,246,0.2)" }}>
      {children}
    </code>
  ) : (
    <code style={{ display:"block", background:"rgba(0,0,0,0.5)", color:"#86efac", padding:"14px 16px", borderRadius:"10px", fontSize:"12px", fontFamily:"'Fira Code', monospace", overflowX:"auto", whiteSpace:"pre", border:"1px solid rgba(139,92,246,0.15)", lineHeight:"1.7" }}>
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <div style={{ margin:"10px 0", borderRadius:"10px", overflow:"hidden", border:"1px solid rgba(139,92,246,0.2)" }}>
      <div style={{ background:"rgba(124,58,237,0.12)", padding:"6px 14px", display:"flex", alignItems:"center", gap:"6px", borderBottom:"1px solid rgba(139,92,246,0.15)" }}>
        <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#f87171" }} />
        <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#fbbf24" }} />
        <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#4ade80" }} />
        <span style={{ marginLeft:"6px", fontSize:"10px", color:"rgba(255,255,255,0.3)", fontFamily:"monospace" }}>code</span>
      </div>
      <pre style={{ margin:0, padding:0, background:"rgba(0,0,0,0.5)" }}>{children}</pre>
    </div>
  ),
  blockquote: ({ children }) => (
    <blockquote style={{ margin:"10px 0", padding:"10px 16px", borderLeft:"3px solid #7c3aed", background:"rgba(124,58,237,0.06)", borderRadius:"0 10px 10px 0", color:"rgba(255,255,255,0.65)", fontStyle:"italic" }}>
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr style={{ border:"none", borderTop:"1px solid rgba(255,255,255,0.07)", margin:"14px 0" }} />
  ),
  table: ({ children }) => (
    <div style={{ overflowX:"auto", margin:"10px 0", borderRadius:"10px", border:"1px solid rgba(139,92,246,0.2)" }}>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"13px" }}>{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead style={{ background:"rgba(124,58,237,0.15)" }}>{children}</thead>
  ),
  th: ({ children }) => (
    <th style={{ padding:"9px 14px", textAlign:"left", color:"#c4b5fd", fontWeight:600, fontSize:"12px", textTransform:"uppercase", letterSpacing:"0.05em", borderBottom:"1px solid rgba(139,92,246,0.2)" }}>
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td style={{ padding:"9px 14px", color:"rgba(255,255,255,0.75)", borderTop:"1px solid rgba(255,255,255,0.05)", fontSize:"13px" }}>
      {children}
    </td>
  ),
}

export function AIChatSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  /* ── Detect mobile ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
      setHasOpened(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const sendMessage = async (text) => {
    const messageText = text || input
    if (!messageText.trim() || loading) return

    const userMessage = { role: "user", content: messageText }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: data.message || "Something went wrong.",
      }])
    } catch {
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "Connection error. Please try again.",
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <style>{`
        @keyframes floatY {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes msgPop {
          from { opacity:0; transform: translateY(12px) scale(0.97); }
          to   { opacity:1; transform: translateY(0)    scale(1); }
        }
        @keyframes dot-bounce {
          0%,60%,100% { transform: translateY(0); }
          30%          { transform: translateY(-7px); }
        }
        .fab-float    { animation: floatY 3s ease-in-out infinite; }
        .pulse-ring   { animation: pulseRing 2.2s ease-out infinite; }
        .pulse-ring-2 { animation: pulseRing 2.2s ease-out 0.7s infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #a78bfa, #60a5fa, #34d399, #f472b6, #a78bfa);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .msg-pop { animation: msgPop 0.3s cubic-bezier(0.34,1.56,0.64,1) both; }
        .dot1 { animation: dot-bounce 1.2s 0.0s infinite; }
        .dot2 { animation: dot-bounce 1.2s 0.2s infinite; }
        .dot3 { animation: dot-bounce 1.2s 0.4s infinite; }
        .chat-scroll::-webkit-scrollbar { width: 4px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 99px; }
        .input-glow:focus {
          border-color: rgba(139,92,246,0.7) !important;
          box-shadow: 0 0 0 3px rgba(139,92,246,0.12) !important;
          outline: none !important;
        }
        .suggest-btn:hover {
          background: rgba(139,92,246,0.18) !important;
          border-color: rgba(139,92,246,0.55) !important;
          color: #fff !important;
          transform: translateX(4px) !important;
        }
        .suggest-btn:active {
          transform: scale(0.97) !important;
        }
        .send-btn:hover:not(:disabled) {
          transform: scale(1.08) !important;
          box-shadow: 0 6px 24px rgba(124,58,237,0.6) !important;
        }
      `}</style>

      {/* ══════════════════════════════════
          PAGE SECTION — TEASER CARD (unchanged)
      ══════════════════════════════════ */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div style={{ position:"absolute", top:"20%", left:"10%", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", pointerEvents:"none", filter:"blur(40px)" }} />
        <div style={{ position:"absolute", bottom:"10%", right:"10%", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)", pointerEvents:"none", filter:"blur(40px)" }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="text-center mb-16">
            <div style={{ display:"inline-flex", alignItems:"center", gap:"7px", padding:"5px 16px", borderRadius:"99px", border:"1px solid rgba(139,92,246,0.3)", background:"rgba(139,92,246,0.07)", marginBottom:"20px" }}>
              <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#a78bfa", display:"inline-block" }} />
              <span style={{ fontSize:"11px", color:"#a78bfa", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" }}>AI Powered Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="shimmer-text">Ask Me Anything</span>
            </h2>
            <p className="text-foreground/50 text-lg max-w-xl mx-auto leading-relaxed">
              My personal AI assistant knows everything about my journey — built to impress recruiters and help fellow developers.
            </p>
          </motion.div>

          <motion.div initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.15 }}>
            <div style={{ borderRadius:"28px", border:"1px solid rgba(139,92,246,0.18)", background:"linear-gradient(145deg, rgba(15,10,30,0.8) 0%, rgba(17,24,39,0.8) 100%)", backdropFilter:"blur(20px)", overflow:"hidden", boxShadow:"0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.3)" }}>
              <div style={{ padding:"14px 22px", borderBottom:"1px solid rgba(255,255,255,0.05)", background:"rgba(124,58,237,0.06)", display:"flex", alignItems:"center", gap:"8px" }}>
                <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:"#f87171" }} />
                <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:"#fbbf24" }} />
                <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:"#4ade80" }} />
                <div style={{ flex:1, display:"flex", justifyContent:"center" }}>
                  <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.25)", fontFamily:"monospace" }}>shobhit.ai/chat</span>
                </div>
              </div>

              <div style={{ padding:"48px 44px", display:"flex", gap:"56px", alignItems:"center" }}>
                <div style={{ flex:1, minWidth:0 }}>
                  <div className="fab-float" style={{ display:"inline-flex", position:"relative", marginBottom:"32px" }}>
                    <div className="pulse-ring"   style={{ position:"absolute", inset:"-16px", borderRadius:"50%", border:"1px solid rgba(139,92,246,0.35)" }} />
                    <div className="pulse-ring-2" style={{ position:"absolute", inset:"-16px", borderRadius:"50%", border:"1px solid rgba(139,92,246,0.2)" }} />
                    <div style={{ width:"88px", height:"88px", borderRadius:"50%", background:"linear-gradient(135deg,#7c3aed 0%,#4f46e5 50%,#0ea5e9 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"38px", color:"#fff", position:"relative", zIndex:1, boxShadow:"0 0 50px rgba(124,58,237,0.5),inset 0 1px 0 rgba(255,255,255,0.2)" }}>
                      <RiChatVoiceAiFill />
                    </div>
                  </div>
                  <h3 style={{ fontSize:"26px", fontWeight:800, color:"#fff", marginBottom:"12px", letterSpacing:"-0.02em" }}>Chat with my AI</h3>
                  <p style={{ color:"rgba(255,255,255,0.45)", fontSize:"15px", lineHeight:"1.7", marginBottom:"28px" }}>
                    Instantly learn about my skills, projects, availability, and more — no waiting, no forms.
                  </p>
                  <div style={{ display:"flex", gap:"28px", marginBottom:"36px" }}>
                    {[["50+","LeetCode"],["5+","Hackathons"],["MERN","Stack"]].map(([val,label]) => (
                      <div key={label}>
                        <div style={{ fontSize:"22px", fontWeight:800, color:"#a78bfa" }}>{val}</div>
                        <div style={{ fontSize:"10px", color:"rgba(255,255,255,0.35)", textTransform:"uppercase", letterSpacing:"0.08em" }}>{label}</div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setIsOpen(true)} style={{ display:"inline-flex", alignItems:"center", gap:"10px", padding:"14px 28px", borderRadius:"14px", background:"linear-gradient(135deg,#7c3aed,#4f46e5)", color:"#fff", fontWeight:700, fontSize:"15px", border:"none", cursor:"pointer", transition:"all 0.25s", boxShadow:"0 8px 30px rgba(124,58,237,0.4)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 14px 40px rgba(124,58,237,0.55)" }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 8px 30px rgba(124,58,237,0.4)" }}>
                    <span>Start Chatting</span>
                    <span style={{ fontSize:"18px" }}>→</span>
                  </button>
                </div>

                <div style={{ width:"260px", flexShrink:0, display:"flex", flexDirection:"column", gap:"10px" }}>
                  <p style={{ fontSize:"11px", color:"rgba(255,255,255,0.3)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"4px" }}>Try asking</p>
                  {SUGGESTED.map((s, i) => (
                    <motion.button key={s.text} initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.3+i*0.1 }}
                      onClick={() => { setIsOpen(true); setTimeout(() => sendMessage(s.text), 450) }}
                      className="suggest-btn"
                      style={{ display:"flex", alignItems:"center", gap:"10px", padding:"12px 16px", borderRadius:"14px", border:"1px solid rgba(139,92,246,0.22)", background:"rgba(139,92,246,0.06)", color:"rgba(255,255,255,0.7)", fontSize:"13px", cursor:"pointer", textAlign:"left", transition:"all 0.2s", width:"100%" }}>
                      <span style={{ fontSize:"17px", display:"flex", alignItems:"center" }}>{s.icon}</span>
                      <span style={{ flex:1 }}>{s.text}</span>
                      <span style={{ opacity:0.35, fontSize:"14px" }}>→</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FLOATING FAB
      ══════════════════════════════════ */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale:0, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0, opacity:0 }}
            transition={{ delay:1.2, type:"spring", stiffness:220 }}
            onClick={() => setIsOpen(true)}
            className="fab-float"
            style={{
              position:"fixed",
              bottom: isMobile ? "84px" : "28px",  // above iOS nav bar
              right:"24px",
              zIndex:9998,
              width: isMobile ? "56px" : "62px",
              height: isMobile ? "56px" : "62px",
              borderRadius:"50%",
              background:"linear-gradient(135deg,#7c3aed,#4f46e5)",
              border:"none",
              cursor:"pointer",
              fontSize:"24px",
              color:"#fff",
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow:"0 8px 32px rgba(124,58,237,0.55)",
            }}
          >
            {!hasOpened && (
              <div style={{ position:"absolute", top:"3px", right:"3px", width:"13px", height:"13px", borderRadius:"50%", background:"#f43f5e", border:"2px solid #fff" }} />
            )}
            <RiChatVoiceAiFill />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════
          CHAT PANEL
          Desktop → slides in from RIGHT
          Mobile  → slides up FULL SCREEN (native sheet feel)
      ══════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              transition={{ duration:0.25 }}
              onClick={() => setIsOpen(false)}
              style={{ position:"fixed", inset:0, zIndex:10000, background:"rgba(0,0,0,0.75)", backdropFilter:"blur(8px)" }}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={isMobile ? { y:"100%", opacity:0 }   : { x:"100%", opacity:0 }}
              animate={isMobile ? { y:0, opacity:1 }         : { x:0, opacity:1 }}
              exit={isMobile    ? { y:"100%", opacity:0 }    : { x:"100%", opacity:0 }}
              transition={{ type:"spring", stiffness:300, damping:32 }}
              style={{
                position:"fixed",
                /* Mobile: full screen from top (incl. status bar) */
                top:    isMobile ? 0 : 0,
                right:  isMobile ? 0 : 0,
                bottom: isMobile ? 0 : 0,
                left:   isMobile ? 0 : "auto",
                zIndex:10001,
                width:  isMobile ? "100%" : "min(580px, 100vw)",
                display:"flex",
                flexDirection:"column",
                background:"linear-gradient(180deg,#0b0b18 0%,#0d0f1c 100%)",
                borderLeft: isMobile ? "none" : "1px solid rgba(139,92,246,0.2)",
                boxShadow: isMobile ? "none" : "-20px 0 80px rgba(0,0,0,0.6)",
              }}
            >

              {/* ── Header ── */}
              <div style={{
                padding:"16px 16px",
                paddingTop: isMobile ? "calc(16px + env(safe-area-inset-top))" : "16px",
                borderBottom:"1px solid rgba(255,255,255,0.06)",
                background:"rgba(124,58,237,0.07)",
                display:"flex", alignItems:"center", gap:"10px",
                flexShrink:0,
              }}>
                <div style={{ width:"40px", height:"40px", borderRadius:"50%", background:"linear-gradient(135deg,#7c3aed,#4f46e5,#0ea5e9)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", color:"#fff", flexShrink:0, boxShadow:"0 0 20px rgba(124,58,237,0.45)" }}>
                  <RiChatVoiceAiFill />
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ color:"#fff", fontWeight:700, fontSize:"15px" }}>Shobhit's AI Assistant</div>
                  <div style={{ display:"flex", alignItems:"center", gap:"5px" }}>
                    <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#4ade80" }} />
                    <span style={{ color:"rgba(255,255,255,0.38)", fontSize:"11px" }}>Online · Groq + LLaMA 3.1</span>
                  </div>
                </div>
                {messages.length > 0 && (
                  <button
                    onClick={() => setMessages([])}
                    style={{ padding:"6px 12px", borderRadius:"8px", fontSize:"12px", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.45)", cursor:"pointer", transition:"all 0.2s", whiteSpace:"nowrap", minHeight:"36px" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color="#fff"; e.currentTarget.style.background="rgba(255,255,255,0.1)" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color="rgba(255,255,255,0.45)"; e.currentTarget.style.background="rgba(255,255,255,0.05)" }}
                  >Clear</button>
                )}
                {/* Close — bigger on mobile for easy tap */}
                <button
                  onClick={() => setIsOpen(false)}
                  style={{ width: isMobile ? "40px" : "34px", height: isMobile ? "40px" : "34px", borderRadius:"10px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.09)", color:"rgba(255,255,255,0.5)", cursor:"pointer", fontSize:"16px", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s", flexShrink:0 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background="rgba(239,68,68,0.2)"; e.currentTarget.style.color="#f87171" }}
                  onMouseLeave={(e) => { e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.color="rgba(255,255,255,0.5)" }}
                >✕</button>
              </div>

              {/* ── Messages ── */}
              <div
                className="chat-scroll"
                style={{
                  flex:1,
                  overflowY:"auto",
                  padding: isMobile ? "16px 12px" : "24px 20px",
                  display:"flex",
                  flexDirection:"column",
                  gap: isMobile ? "14px" : "20px",
                  WebkitOverflowScrolling:"touch", // smooth momentum scroll on iOS
                }}
              >
                {/* Empty state */}
                {messages.length === 0 && (
                  <div style={{ textAlign:"center", padding:"8px 0 16px" }}>
                    <div style={{ fontSize:"44px", marginBottom:"12px" }}>👋</div>
                    <h4 style={{ color:"#fff", fontSize:"17px", fontWeight:700, marginBottom:"8px" }}>Hi! I'm Shobhit's AI</h4>
                    <p style={{ color:"rgba(255,255,255,0.38)", fontSize: isMobile ? "14px" : "13.5px", marginBottom:"24px", lineHeight:"1.65" }}>
                      Ask me about skills, projects, availability,<br />or anything tech-related!
                    </p>
                    <div style={{ display:"flex", flexDirection:"column", gap: isMobile ? "10px" : "8px" }}>
                      {SUGGESTED.map((s) => (
                        <button
                          key={s.text}
                          onClick={() => sendMessage(s.text)}
                          className="suggest-btn"
                          style={{
                            display:"flex", alignItems:"center", gap:"12px",
                            /* Bigger touch target on mobile — min 52px */
                            padding: isMobile ? "14px 18px" : "13px 18px",
                            minHeight: isMobile ? "52px" : "auto",
                            borderRadius:"14px",
                            border:"1px solid rgba(139,92,246,0.25)",
                            background:"rgba(139,92,246,0.06)",
                            color:"rgba(255,255,255,0.75)",
                            fontSize: isMobile ? "14.5px" : "13.5px",
                            cursor:"pointer",
                            textAlign:"left",
                            width:"100%",
                            transition:"all 0.2s",
                          }}
                        >
                          <span style={{ fontSize:"19px", display:"flex", alignItems:"center", flexShrink:0 }}>{s.icon}</span>
                          <span style={{ flex:1 }}>{s.text}</span>
                          <span style={{ opacity:0.35, fontSize:"15px" }}>→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Message bubbles */}
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className="msg-pop"
                    style={{ display:"flex", flexDirection:"column", alignItems: msg.role==="user" ? "flex-end" : "flex-start", gap:"4px" }}
                  >
                    <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.25)", paddingLeft:"4px", paddingRight:"4px", letterSpacing:"0.06em", textTransform:"uppercase" }}>
                      {msg.role==="user" ? "You" : "Shobhit's AI"}
                    </span>
                    <div style={{
                      display:"flex",
                      alignItems:"flex-end",
                      /* slightly tighter gap on mobile */
                      gap: isMobile ? "7px" : "9px",
                      flexDirection: msg.role==="user" ? "row-reverse" : "row",
                      /* wider bubbles on mobile — more screen real estate used */
                      maxWidth: isMobile ? "97%" : "92%",
                    }}>
                      {/* Avatar — smaller on mobile to save space */}
                      <div style={{
                        width: isMobile ? "26px" : "30px",
                        height: isMobile ? "26px" : "30px",
                        borderRadius:"50%",
                        flexShrink:0,
                        background: msg.role==="user" ? "rgba(255,255,255,0.1)" : "linear-gradient(135deg,#7c3aed,#4f46e5)",
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontSize: isMobile ? "12px" : "14px",
                        color:"#fff",
                        border:"1px solid rgba(255,255,255,0.08)",
                        alignSelf:"flex-end",
                      }}>
                        {msg.role==="user" ? "👤" : <RiChatVoiceAiFill />}
                      </div>

                      {/* Bubble */}
                      {msg.role==="user" ? (
                        <div style={{
                          padding: isMobile ? "10px 14px" : "11px 16px",
                          borderRadius:"18px 18px 4px 18px",
                          background:"linear-gradient(135deg,#7c3aed,#4f46e5)",
                          fontSize: isMobile ? "14.5px" : "14px",
                          lineHeight:"1.65",
                          color:"#fff",
                          boxShadow:"0 4px 20px rgba(124,58,237,0.35)",
                          wordBreak:"break-word",
                        }}>
                          <p style={{ margin:0 }}>{msg.content}</p>
                        </div>
                      ) : (
                        <div style={{
                          padding: isMobile ? "14px 14px" : "16px 20px",
                          borderRadius:"4px 18px 18px 18px",
                          background:"rgba(255,255,255,0.03)",
                          border:"1px solid rgba(255,255,255,0.08)",
                          backdropFilter:"blur(10px)",
                          boxShadow:"0 4px 24px rgba(0,0,0,0.2)",
                          maxWidth:"100%",
                          wordBreak:"break-word",
                          overflowX:"hidden",
                        }}>
                          <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"10px", paddingBottom:"8px", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                            <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#4ade80" }} />
                            <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.3)", textTransform:"uppercase", letterSpacing:"0.08em", fontWeight:600 }}>AI Response</span>
                          </div>
                          <ReactMarkdown remarkPlugins={[remarkGfm]} components={MarkdownComponents}>
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing dots */}
                {loading && (
                  <div className="msg-pop" style={{ display:"flex", alignItems:"flex-end", gap: isMobile ? "7px" : "9px" }}>
                    <div style={{ width: isMobile ? "26px" : "30px", height: isMobile ? "26px" : "30px", borderRadius:"50%", background:"linear-gradient(135deg,#7c3aed,#4f46e5)", display:"flex", alignItems:"center", justifyContent:"center", fontSize: isMobile ? "12px" : "14px", color:"#fff", border:"1px solid rgba(255,255,255,0.08)" }}>
                      <RiChatVoiceAiFill />
                    </div>
                    <div style={{ padding:"14px 18px", borderRadius:"4px 18px 18px 18px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", display:"flex", gap:"5px", alignItems:"center" }}>
                      <div className="dot1" style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#7c3aed" }} />
                      <div className="dot2" style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#6366f1" }} />
                      <div className="dot3" style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#0ea5e9" }} />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* ── Input Area ── */}
              <div style={{
                flexShrink:0,
                borderTop:"1px solid rgba(255,255,255,0.06)",
                background:"rgba(0,0,0,0.25)",
                padding: isMobile ? "12px 12px" : "16px 20px 22px",
                /* Respect iPhone home bar */
                paddingBottom: isMobile ? "calc(12px + env(safe-area-inset-bottom))" : "22px",
              }}>
                {/* Hint row — hide on mobile to save vertical space */}
                {!isMobile && (
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"10px" }}>
                    <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.18)" }}>Enter to send · Shift+Enter for new line</span>
                    <span style={{ fontSize:"11px", color: input.length > 450 ? "#f87171" : "rgba(255,255,255,0.18)" }}>{input.length}/500</span>
                  </div>
                )}

                <div style={{ display:"flex", gap:"10px", alignItems:"flex-end" }}>
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => { if (e.target.value.length <= 500) setInput(e.target.value) }}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about skills, projects, tech..."
                    rows={2}
                    className="input-glow"
                    style={{
                      flex:1,
                      background:"rgba(255,255,255,0.05)",
                      border:"1px solid rgba(255,255,255,0.1)",
                      borderRadius:"14px",
                      padding: isMobile ? "13px 14px" : "12px 16px",
                      color:"rgba(255,255,255,0.9)",
                      /* 16px prevents iOS auto-zoom on focus */
                      fontSize: isMobile ? "16px" : "14px",
                      outline:"none",
                      resize:"none",
                      lineHeight:"1.6",
                      fontFamily:"inherit",
                      transition:"all 0.2s",
                    }}
                  />
                  {/* Send button — bigger on mobile */}
                  <button
                    onClick={() => sendMessage()}
                    disabled={loading || !input.trim()}
                    className="send-btn"
                    style={{
                      width: isMobile ? "52px" : "48px",
                      height: isMobile ? "52px" : "48px",
                      borderRadius:"14px",
                      flexShrink:0,
                      background: !loading && input.trim() ? "linear-gradient(135deg,#7c3aed,#4f46e5)" : "rgba(255,255,255,0.05)",
                      border: !loading && input.trim() ? "none" : "1px solid rgba(255,255,255,0.08)",
                      cursor: !loading && input.trim() ? "pointer" : "not-allowed",
                      color: !loading && input.trim() ? "#fff" : "rgba(255,255,255,0.2)",
                      fontSize: isMobile ? "22px" : "20px",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      transition:"all 0.2s",
                      boxShadow: !loading && input.trim() ? "0 4px 20px rgba(124,58,237,0.45)" : "none",
                    }}
                  >↑</button>
                </div>

                {/* Compact counter + hint on mobile — below the input row */}
                {isMobile && (
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"8px" }}>
                    <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.2)" }}>Tap ↑ to send</span>
                    <span style={{ fontSize:"11px", color: input.length > 450 ? "#f87171" : "rgba(255,255,255,0.2)" }}>{input.length}/500</span>
                  </div>
                )}

                <p style={{ fontSize:"11px", color:"rgba(255,255,255,0.15)", textAlign:"center", marginTop: isMobile ? "8px" : "12px" }}>
                  AI responses based on Shobhit's real portfolio data
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}