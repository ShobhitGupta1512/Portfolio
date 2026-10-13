
// @ts-expect-error CSS side-effect imports are handled by the Next.js bundler.
import "./loading.css";

const steps = [
  "Connecting to portfolio",
  "Loading MERN stack projects",
  "Preparing developer experience",
];

export default function Loading() {
  return (
    <main
      className="portfolio-loader"
      role="status"
      aria-label="Loading portfolio"
      aria-busy="true"
    >
      <header className="loader-header">
        <span className="loader-brand">
          SKG<span>.</span>
        </span>
        <span className="loader-version">PORTFOLIO / 2026</span>
      </header>

      <section className="loader-content">
        <div className="loader-terminal" aria-hidden="true">
          <div className="terminal-header">
            <div className="terminal-dots">
              <i />
              <i />
              <i />
            </div>
            <span>shobhit@portfolio:~</span>
          </div>

          <div className="terminal-body">
            <p className="terminal-command">
              <span>$</span> npm run portfolio
            </p>

            {steps.map((step, index) => (
              <p className="terminal-step" key={step}>
                <span>›</span>
                {step}
                {index < 2 ? (
                  <strong>✓ done</strong>
                ) : (
                  <strong className="working">processing...</strong>
                )}
              </p>
            ))}

            <p className="terminal-ready">
              Building ideas into real solutions
              <span className="cursor" />
            </p>
          </div>
        </div>

        <div className="loader-identity">
          <p className="loader-eyebrow">WELCOME TO MY PORTFOLIO</p>

          <h1>
            SHOBHIT <span>KUMAR.</span>
          </h1>

          <p className="loader-role">
            MERN STACK DEVELOPER · AI ENTHUSIAST
          </p>

          <div className="progress-track">
            <div className="progress-bar" />
          </div>

          <p className="loader-caption">
            Crafting digital experiences
          </p>
        </div>
      </section>

      <footer className="loader-footer">
        <span>CODE. BUILD. IMPROVE.</span>
        <span>OPEN TO OPPORTUNITIES ↗</span>
      </footer>
    </main>
  );
}
