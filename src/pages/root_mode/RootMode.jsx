// src/pages/root_mode/RootMode.jsx
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

export default function RootMode({ onSwitchToUser, onBackToBoot }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <Brand />

        <div className="profile">
          <div className="profile-avatar">CP</div>
          <div className="profile-info">
            <div className="profile-name">Christos Polimatidis</div>
            <div className="profile-handle">root mode · human context</div>
          </div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">session</div>
          <div className="mode-tag mode-root">root@christOS</div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">hobbies</div>
          <ul className="link-list">
            <li>music, playlists & late-night headphones</li>
            <li>skate / walks / touching actual grass</li>
            <li>collecting strange links & ideas</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">controls</div>
          <button className="mode-toggle" onClick={onSwitchToUser}>
            switch to user mode
          </button>
          <button className="mode-toggle ghost" onClick={onBackToBoot}>
            back to bootloader
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="main-header">
          <div className="prompt">
            <span className="prompt-user">chris@root</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~/life</span>
            <span className="prompt-sep">$</span>
            <span className="prompt-cursor" />
          </div>
          <p className="main-subtitle">
            Less resume, more human: what I do when the editor is closed.
          </p>
        </header>

        <section className="panel">
          <h1 className="section-title">root mode / personal space</h1>
          <p className="section-text">
            This session is about the{" "}
            <span className="accent">person behind the code</span>. The
            non-zero amount of chaos that drives all the projects in user mode.
          </p>

          <div className="grid">
            <div className="stat">
              <div className="stat-label">energy sources</div>
              <div className="stat-value">
                coffee, good music, long walks, interesting conversations.
              </div>
            </div>
            <div className="stat">
              <div className="stat-label">idle tasks</div>
              <div className="stat-value">
                reading, tinkering with ideas, sometimes just staring at the
                sky pretending to debug it.
              </div>
            </div>
            <div className="stat">
              <div className="stat-label">known issues</div>
              <div className="stat-value">
                occasionally talking too much about tech. working on it.
              </div>
            </div>
          </div>

          <ul className="log-list">
            <li>[LOG] discovered new song → played 12 times in a row.</li>
            <li>[LOG] thought of a project → added to growing ideas.txt.</li>
            <li>[LOG] remembered to touch grass → success.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
