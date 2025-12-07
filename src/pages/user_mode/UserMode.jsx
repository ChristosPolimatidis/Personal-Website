// src/pages/user_mode/UserMode.jsx
function Brand() {
  return (
    <div className="brand">
      <div className="brand-logo">&lt;/&gt;</div>
      <div>
        <div className="brand-name">christOS</div>
        <div className="brand-tag">personal kernel space</div>
      </div>
    </div>
  );
}

export default function UserMode({ onSwitchToRoot, onBackToBoot }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <Brand />

        <div className="profile">
          <div className="profile-avatar">CP</div>
          <div className="profile-info">
            <div className="profile-name">Christos Polimatidis</div>
            <div className="profile-handle">user mode · career context</div>
          </div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">session</div>
          <div className="mode-tag mode-user">user@christOS</div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">topics</div>
          <ul className="link-list">
            <li>web dev & interfaces</li>
            <li>algorithms & systems</li>
            <li>visual explanations</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">links</div>
          <ul className="link-list">
            <li>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:your.email@example.com">Email</a>
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">controls</div>
          <button className="mode-toggle" onClick={onSwitchToRoot}>
            switch to root mode
          </button>
          <button className="mode-toggle ghost" onClick={onBackToBoot}>
            back to bootloader
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="main-header">
          <div className="prompt">
            <span className="prompt-user">chris@user-space</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~/career</span>
            <span className="prompt-sep">$</span>
            <span className="prompt-cursor" />
          </div>
          <p className="main-subtitle">
            Mapping my engineering brain: stack, projects and what I&apos;m
            currently building.
          </p>
        </header>

        <section className="panel">
          <h1 className="section-title">user mode / career & CS</h1>
          <p className="section-text">
            This session is focused on{" "}
            <span className="accent">code, systems and experiments</span>.
            Imagine you opened my developer console.
          </p>

          <div className="grid">
            <div className="stat">
              <div className="stat-label">stack</div>
              <div className="stat-value">
                React, JavaScript, Python, a bit of low-level curiosity.
              </div>
            </div>
            <div className="stat">
              <div className="stat-label">current focus</div>
              <div className="stat-value">
                building small tools & visualizations that explain complex
                ideas.
              </div>
            </div>
            <div className="stat">
              <div className="stat-label">favorite bugs</div>
              <div className="stat-value">
                race conditions, floating-point weirdness, and off-by-one
                errors.
              </div>
            </div>
          </div>

          <div className="project-list">
            <article className="project">
              <h2 className="project-title">algo-visuals</h2>
              <p className="project-body">
                Tiny interactive visualizations of algorithms, designed to feel
                like debugging sessions instead of textbook diagrams.
              </p>
              <p className="project-meta">
                status: prototyping · tech: React
              </p>
            </article>

            <article className="project">
              <h2 className="project-title">system-notes</h2>
              <p className="project-body">
                Short notes on OS, networks and other CS topics – more like
                commit messages than essays.
              </p>
              <p className="project-meta">
                status: drafting · format: markdown
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
