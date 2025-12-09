// src/pages/user_mode/UserMode.jsx
import profilePic from "../../assets/me.jpg";

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
          <div className="profile-avatar">
          <img
            src={profilePic}
            alt="Christos Polimatidis"
            className="profile-avatar-img"
          />
          </div>
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
            <li>UI/UX Design</li>
            <li>Full-stack web &amp; Interfaces</li>
            <li>Cryptography &amp; security</li>
            <li>Cloud (Azure/AWS)</li>
            <li>IoT Engineering</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">links</div>
          <ul className="link-list">
            <li>
              <a
                href="https://github.com/ChristosPolimatidis"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/christos-polimatidis-2259ab330?utm_source=share&utm_campaign=share_via&utm_content=profile"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:polimatidischris@gmail.com">Email</a>
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
            Mapping my engineering path: full-stack web, cryptography, cloud and
            embedded/IoT systems I like to wire together.
          </p>
        </header>

        <section className="panel">
          <h1 className="section-title">user mode / career &amp; CS</h1>
          <p className="section-text">
            This session is focused on{" "}
            <span className="accent">
              full-stack web, cryptography, cloud (Azure &amp; AWS) and
              embedded/IoT experiments
            </span>
            . Basically, what you&apos;d see if you opened my developer console.
          </p>

          <div className="grid">
            <div className="stat">
              <div className="stat-label">stack</div>
              <div className="stat-value">
                Full-stack web (React, JavaScript), Python, some C/C++ for
                embedded work, plus cloud tooling on Azure &amp; AWS and a
                growing love for cryptography and computer vision.
              </div>
            </div>
            <div className="stat">
              <div className="stat-label">current focus</div>
              <div className="stat-value">
                building end-to-end systems: UIs, APIs, data pipelines and
                devices that push telemetry to the cloud.
              </div>
            </div>
            <div className="stat">
              <div className="stat-label">favorite bugs</div>
              <div className="stat-value">
                null pointer exceptions, missing newline at end of file, and
                mysterious HTTP 403s that absolutely should be 200.
              </div>
            </div>
          </div>

          <div className="project-list">
            {/* Notes / meta CS stuff */}
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

            {/* Experience */}
            <article className="project">
              <h2 className="project-title">experience-log</h2>
              <p className="project-body">
                <strong>Junior Cloud &amp; IoT Engineer · OptiSol.io</strong><br />
                Working on Azure-first cloud and IoT solutions: connecting devices, data
                and dashboards, and helping ship reliable cloud-native services.
                <br />
                <br />
                <strong>Computer Vision Engineering Intern · OptiSol.io</strong><br />
                Led the annotation and training infrastructure for Attalos, a real-time
                Dacus pest detection pipeline using YOLOv12. Designed a cloud-first
                workflow with CVAT/Label Studio on Azure Blob (multi-user projects,
                YOLO/COCO exports), authored internal guides, and wired storage→training
                pipelines for scalable model updates. Also delivered ESP32-S3 + SIM7670G
                edge implementation in C++/PlatformIO with 4G/Wi-Fi connectivity,
                telemetry &amp; image upload, and end-to-end Azure integration.
                <br />
                <br />
                <strong>Teaching Assistant · University of Crete, Department of CS</strong>
                <br />
                Supported two undergraduate courses: CS-180 Logic in Computer Science and
                CS-252 Object-oriented Programming with Java. Ran labs, helped students
                debug code and reasoning, and assisted with grading.
              </p>
              <p className="project-meta">
                status: updated · roles: cloud · computer vision · teaching
              </p>
            </article>


            {/* Certificates */}
            <article className="project">
              <h2 className="project-title">certificates</h2>
              <p className="project-body">
                <strong>ICS-FORTH · 14th IJCKG</strong> — certification of attendance at
                the 14th International Joint Conference on Knowledge Graphs.
                <br />
                <strong>Hackathons</strong> — participation awards from FuturEd (Epignosis)
                and ORamaVR Spring 2023, focused on applied Computer Science and Unity/C#.
                <br />
                <strong>YOLOv12: Custom Object Detection, Tracking &amp; Webapps</strong>{" "}
                (Udemy) — hands-on work with modern YOLO pipelines for computer vision.
                <br />
                <strong>C2 ECPE English</strong> (Hellenic American Union) and{" "}
                <strong>B2 English</strong> (University of Cambridge) — advanced English &
                communication.
              </p>
              <p className="project-meta">
                status: curated · focus: computer vision · hackathons · English
              </p>
            </article>

            {/* Personal (non-CSD) projects */}
            <article className="project">
              <h2 className="project-title">personal-projects</h2>
              <p className="project-body">
                Things I tinker with outside university: small full-stack tools,
                cryptography experiments and embedded/IoT prototypes that talk
                to cloud services.
              </p>
              <p className="project-meta">
                status: active · scope: full-stack · crypto · IoT
              </p>
            </article>

            {/* GitHub repos category label */}
            <article className="project">
              <h2 className="project-title">public-repos</h2>
              <p className="project-body">
                Selected projects from my GitHub account.
              </p>
              <p className="project-meta">
                source: github.com/ChristosPolimatidis
              </p>
            </article>

            {/* Actual GitHub projects */}
            <article className="project">
              <h2 className="project-title">
                <a
                  href="https://github.com/ChristosPolimatidis/Personal-Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  Personal-Website
                </a>
              </h2>
              <p className="project-body">
                Source code for this christOS personal website.
              </p>
              <p className="project-meta">
                status: live · lang: JavaScript
              </p>
            </article>

            <article className="project">
              <h2 className="project-title">
                <a
                  href="https://github.com/ChristosPolimatidis/Epignosis-Dev-Assignment"
                  target="_blank"
                  rel="noreferrer"
                >
                  Epignosis-Dev-Assignment
                </a>
              </h2>
              <p className="project-body">
                Dev assignment implemented for an internship application at
                Epignosis.
              </p>
              <p className="project-meta">
                status: complete · lang: JavaScript
              </p>
            </article>

            <article className="project">
              <h2 className="project-title">
                <a
                  href="https://github.com/ChristosPolimatidis/Chatbot"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chatbot
                </a>
              </h2>
              <p className="project-body">
                Chatbot built as an interview challenge for a Conveos internship.
              </p>
              <p className="project-meta">
                status: interview project · lang: JavaScript
              </p>
            </article>

            <article className="project">
              <h2 className="project-title">
                <a
                  href="https://github.com/ChristosPolimatidis/Cryptographic-Evaluator-Tool"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cryptographic-Evaluator-Tool
                </a>
              </h2>
              <p className="project-body">
                Tool to evaluate cryptographic libraries for an introduction to
                cryptography course.
              </p>
              <p className="project-meta">
                status: course project · lang: Python
              </p>
            </article>

            <article className="project">
              <h2 className="project-title">
                <a
                  href="https://github.com/ChristosPolimatidis/Event-Booking-Webapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Event-Booking-Webapp
                </a>
              </h2>
              <p className="project-body">
                University project: event booking web app for the Files and
                Databases course.
              </p>
              <p className="project-meta">
                status: course project · lang: Java
              </p>
            </article>

            <article className="project">
              <h2 className="project-title">
                <a
                  href="https://github.com/ChristosPolimatidis/Firefighting-Event-Reporting-Webapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Firefighting-Event-Reporting-Webapp
                </a>
              </h2>
              <p className="project-body">
                Java web app to record and report firefighting incidents.
              </p>
              <p className="project-meta">
                status: course project · lang: Java
              </p>
            </article>

            <article className="project">
              <h2 className="project-title">
                <a
                  href="https://github.com/ChristosPolimatidis/Pangram-Checker"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pangram-Checker
                </a>
              </h2>
              <p className="project-body">
                C implementation of a pangram checker based on a Stack Overflow
                coding challenge.
              </p>
              <p className="project-meta">
                status: challenge solution · lang: C
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
