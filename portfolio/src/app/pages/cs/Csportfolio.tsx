import type { FC } from "react";
import {
  profile,
  projects,
  experience,
  skills,
  credentials,
  type Project,
} from "@/app/pages/cs/projects";

const byId = (id: string): Project => {
  const p = projects.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project: ${id}`);
  return p;
};

const StackTags: FC<{ items: string[] }> = ({ items }) => (
  <ul className="tags" aria-label="Technologies">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const ProjectLinks: FC<{ project: Project }> = ({ project }) =>
  project.links?.length ? (
    <p className="project-links">
      {project.links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
          {l.label}
        </a>
      ))}
    </p>
  ) : null;

const ProjectBody: FC<{ project: Project }> = ({ project }) => (
  <>
    <h3 className="project-title">{project.title}</h3>
    <p className="project-summary">{project.summary}</p>
    <p className="project-role">{project.role}</p>
    <div className="story">
      <div>
        <h4>The problem</h4>
        <p>{project.problem}</p>
      </div>
      <div>
        <h4>What I built</h4>
        <p>{project.solution}</p>
      </div>
    </div>
    {project.highlights && (
      <ul className="highlights">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    )}
    <StackTags items={project.stack} />
    <ProjectLinks project={project} />
  </>
);

/** The one memorable element: a LiDAR sweep over a small maze. */
const LidarMap: FC = () => (
  <svg
    className="lidar"
    viewBox="0 0 320 320"
    role="img"
    aria-label="Illustration of a LiDAR sweep mapping a maze"
  >
    <g className="lidar-walls">
      <path d="M20 20H300V300H20Z" />
      <path d="M20 110H190M130 110V200M70 200H240M240 200V110M240 110H300M190 20V70M70 250V300M160 250V300" />
    </g>
    <g className="lidar-sweep">
      <path d="M160 160L160 -20A180 180 0 0 1 270 17Z" className="wedge" />
      <line x1="160" y1="160" x2="160" y2="-20" className="beam" />
    </g>
    <circle cx="160" cy="160" r="6" className="robot" />
  </svg>
);

export const CsPortfolio: FC = () => {
  const slam = byId("slam");
  const shells = [byId("c-shell"), byId("java-shell")];
  const more = ["wordless", "sudoku", "weather"].map(byId);

  return (
    <div className="cs">
      <a className="skip" href="#projects">
        Skip to projects
      </a>

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>{profile.headline}</h1>
            <p className="lede">{profile.bio}</p>
            <p className="hero-actions">
              <a className="btn" href={profile.resume}>
                Download resume
              </a>
              <a className="btn btn-quiet" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn-quiet" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
          <LidarMap />
        </section>

        <section id="projects" className="block">
          <h2>Projects</h2>

          <article className="feature">
            <ProjectBody project={slam} />
          </article>

          <h3 className="group-title">One shell, written twice</h3>
          <p className="group-intro">
            I built the same program in C and in Java to compare what each language makes easy and
            what it makes you handle yourself.
          </p>
          <div className="pair">
            {shells.map((p) => (
              <article key={p.id} className="card">
                <ProjectBody project={p} />
              </article>
            ))}
          </div>

          <h3 className="group-title">More work</h3>
          <div className="trio">
            {more.map((p) => (
              <article key={p.id} className="card card-small">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-summary">{p.summary}</p>
                <p>{p.solution}</p>
                <StackTags items={p.stack} />
                <ProjectLinks project={p} />
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="block">
          <h2>Experience</h2>
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.role}>
                <p className="when">{e.when}</p>
                <div>
                  <h3>{e.role}</h3>
                  <p className="org">{e.org}</p>
                  <ul>
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="block">
          <h2>Skills</h2>
          <dl className="skills">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <dt>{group}</dt>
                <dd>
                  <StackTags items={items} />
                </dd>
              </div>
            ))}
          </dl>
          <h3 className="group-title">Certifications and awards</h3>
          <ul className="creds">
            {credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contact" className="cs-footer">
        <h2>Let's talk</h2>
        <p>I'm looking for internships starting summer 2027.</p>
        <p>
          <a className="btn" href="/contact">
            Get in touch
          </a>
        </p>
      </footer>
    </div>
  );
};

export default CsPortfolio;