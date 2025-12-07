// src/pages/BootScreen.jsx
export default function BootScreen({ onSelectUser, onSelectRoot }) {
  return (
    <div className="boot-shell">
      <div className="boot-window">
        <div className="boot-chrome">
          <div className="boot-dots">
            <span className="boot-dot boot-dot-red" />
            <span className="boot-dot boot-dot-amber" />
            <span className="boot-dot boot-dot-green" />
          </div>
          <span className="boot-chrome-title">christOS // init</span>
        </div>

        <p className="boot-label">christOS bootloader</p>
        <h1 className="boot-title">Select session</h1>
        <p className="boot-subtitle">
          Choose the mode you want to use to go into the system.
        </p>

        <div className="boot-grid">
          <button className="boot-card" onClick={onSelectUser}>
            <h2>user mode</h2>
            <p>
              Career, projects and computer science things. Safe for work and
              recruiters.
            </p>
            <span className="boot-pill">recommended entry point</span>
          </button>

          <button
            className="boot-card boot-card-root"
            onClick={onSelectRoot}
          >
            <h2>root mode</h2>
            <p>
              Personal life, hobbies and random logs. Higher privilege, more
              human.
            </p>
            <span className="boot-pill boot-pill-warning">
              handle with care
            </span>
          </button>
        </div>

        <div className="boot-status">
          <span>v0.1.0 · kernel-space personal site</span>
          <span className="boot-status-hint">
            ↑↓ navigate · enter select (or click)
          </span>
        </div>

        <p className="boot-footnote">
          pro tip: you can switch modes from inside each session.
        </p>
      </div>
    </div>
  );
}
