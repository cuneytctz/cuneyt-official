"use client";

export default function Career() {
  return (
    <section className="projects-section" id="career">
      <p className="section-label">MY PROJECTS</p>

      <h2 className="projects-title">
        Companies & Communities I Have Built
      </h2>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-icon">❄️</div>
          <h3>CTZ GROUP</h3>
          <p>
            Industrial refrigeration solutions, sandwich panels, cold storage
            rooms, engineering and turnkey projects.
          </p>
          <a
            href="https://ctzgroup.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Visit Website →
          </a>
        </div>

        <div className="project-card">
          <div className="project-icon">⚽</div>
          <h3>ALTAY FC</h3>
          <p>
            Veteran football club bringing together friendship, leadership
            and sportsmanship.
          </p>
          <a
            href="https://altayfc.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </section>
  );
}
