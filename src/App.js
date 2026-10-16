import { useState } from 'react';
import './App.css';
import {
  RESUME_URL, PHOTO_URL, EMAIL, LINKEDIN, GITHUB,
  skillGroups, allSkills, education, roles, featured, projects, awards, usesSkill, usedFor,
} from './data';

const logo = file => `logos/${file}.svg`;

const Icon = ({ d, size = 18 }) => (
  <svg className="ico" viewBox="0 0 24 24" aria-hidden="true" style={{ width: size, height: size }}>
    {d.map(p => <path key={p} d={p} />)}
  </svg>
);
const OUT = ['M7 17 17 7', 'M7 7h10v10'];
const DOWN = ['M12 5v14', 'm19 12-7 7-7-7'];
const RIGHT = ['M5 12h14', 'm12 5 7 7-7 7'];
const UP = ['M12 19V5', 'm5 12 7-7 7 7'];
const X = ['M18 6 6 18', 'm6 6 12 12'];
const DL = ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'm7 10 5 5 5-5', 'M12 15V3'];

const SECTIONS = ['Education', 'Experience', 'Skills', 'Projects', 'Awards', 'Contact'];

function SectionHead({ n, label, title, lede, id }) {
  return (
    <header className="sec-head">
      <p className="mono idx">{n} — {label}</p>
      <h2 id={id} className="h2">{title}</h2>
      <p className="lede">{lede}</p>
    </header>
  );
}

function Chips({ stack, skill }) {
  return (
    <ul className="chips" aria-label="Stack">
      {stack.map(n => <li key={n} className={skill?.match.includes(n) ? 'chip on' : 'chip'}>{n}</li>)}
    </ul>
  );
}

const Links = ({ links }) => links.map(l => (
  <a key={l.href} className="lnk" href={l.href} target="_blank" rel="noreferrer">{l.label} <Icon d={OUT} size={15} /></a>
));

function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="wrap">
        <header className="h-top">
          <p className="mono h-tl">Software engineer<br />Cloud &amp; agentic AI</p>
          <a className="gram" href="#top" aria-label="Dwayne Otero, back to top">
            <span className="g1" aria-hidden="true">D</span><span className="gl" aria-hidden="true" /><span className="g2" aria-hidden="true">O</span>
          </a>
          <p className="mono" style={{ textAlign: 'right' }}>Portfolio<br />2026</p>
        </header>
        <div className="h-main">
          <div className="h-copy">
            <h1 className="hname rise d1">Dwayne<br />Otero</h1>
            <p className="hsub rise d2">Software Engineer · Full-stack &amp; Cloud</p>
            <p className="hbody rise d3">I build scalable, resilient systems.</p>
            <hr className="hrule rise d3" />
            <div className="row rise d4">
              <a className="btn" href={RESUME_URL} target="_blank" rel="noreferrer"><Icon d={DL} /> Download résumé</a>
              <a className="ghost" href="#contact">Get in touch <Icon d={RIGHT} /></a>
            </div>
          </div>
          <div className="h-art">
            <div className="stage">
              <div className="disc" aria-hidden="true" />
              <div className="arch"><img src={PHOTO_URL} alt="Portrait of Dwayne Otero" /></div>
            </div>
          </div>
        </div>
        <nav className="h-index" aria-label="Sections">
          <ol>
            {SECTIONS.map((s, i) => (
              <li key={s}><a href={`#${s.toLowerCase()}`}><span className="mono">0{i + 1}</span>{s}</a></li>
            ))}
          </ol>
          <span className="mono">Singapore</span>
        </nav>
      </div>
    </section>
  );
}

function LogoLoop() {
  const once = allSkills.filter(s => s.core && s.logo);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mq-track">
        {[...once, ...once].map((s, i) => (
          <span key={i} className="mq-item"><img src={logo(s.logo)} alt="" width="22" height="22" /><span className="mono">{s.name}</span></span>
        ))}
      </div>
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="sec" aria-labelledby="ed-h">
      <div className="wrap sec-grid">
        <SectionHead n="01" label="Education" id="ed-h" title="Education" lede="Software engineering at SMU, built on a diploma in information technology." />
        <ol className="xp">
          {education.map(e => (
            <li key={e.school}>
              <div className="when"><span className="mono dim">{e.dates}</span>{e.badge && <span className="mono now">{e.badge}</span>}</div>
              <div>
                <h3 className="xp-title">{e.school}</h3>
                <p className="xp-org">{e.degree} <span className="dim">· Singapore</span></p>
                <ul className="pts" style={{ marginBottom: 0 }}>{e.points.map(p => <li key={p}>{p}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const dim = (skill, stack) => (skill ? (usesSkill(skill, stack) ? ' hit' : ' fade') : '');

function Experience({ skill }) {
  return (
    <section id="experience" className="sec" aria-labelledby="xp-h">
      <div className="wrap sec-grid">
        <SectionHead n="02" label="Experience" id="xp-h" title="Work history" lede="Teaching, automation and production SaaS work." />
        <ol className="xp">
          {roles.map(r => (
            <li key={r.title} className={'dimmable' + dim(skill, r.stack)}>
              <div className="when"><span className="mono dim">{r.dates}</span>{r.now && <span className="mono now">Current</span>}</div>
              <div>
                <h3 className="xp-title">{r.title}</h3>
                <p className="xp-org">{r.org} <span className="dim">· Singapore</span></p>
                <ul className="pts">{r.points.map(p => <li key={p}>{p}</li>)}</ul>
                <Chips stack={r.stack} skill={skill} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills({ skill, setSkill }) {
  const [all, setAll] = useState(false);
  const pick = s => setSkill(skill === s ? null : s);
  const groups = skillGroups.map(g => ({ ...g, shown: g.items.filter(s => all || s.core) }));
  const used = skill ? usedFor(skill) : [];
  const hasProjects = used.some(u => u.isProject);
  const quick = ['AWS', 'Docker', 'React', 'Python', 'Spring Boot'].map(n => allSkills.find(s => s.name === n));

  return (
    <section id="skills" className="sec" aria-labelledby="skills-h">
      <div className="wrap sec-grid">
        <SectionHead n="03" label="Skills" id="skills-h" title="Tech stack" lede="Hover a logo to bring it to life. Select one to trace exactly where I have used it." />
        <div className="skills-layout">
          <div className="skills-main">
            <div className="row between">
              <p className="mono dim">{groups.reduce((n, g) => n + g.shown.length, 0)} technologies</p>
              <div className="seg" role="group" aria-label="Which skills to show">
                <button type="button" className={all ? '' : 'on'} aria-pressed={!all} onClick={() => setAll(false)}>Core</button>
                <button type="button" className={all ? 'on' : ''} aria-pressed={all} onClick={() => setAll(true)}>Full toolkit</button>
              </div>
            </div>
            {groups.filter(g => g.shown.length).map(g => (
              <div key={g.label} className="sk-row">
                <p className="mono sk-cat">{g.label}</p>
                <div className="sk-tiles">
                  {g.shown.map(s => (
                    <button key={s.name} type="button" className={skill === s ? 'sk on' : 'sk'} aria-pressed={skill === s} onClick={() => pick(s)}>
                      {s.logo ? <img className="sk-logo" src={logo(s.logo)} alt="" width="34" height="34" /> : <span className="sk-abbr" aria-hidden="true">{s.abbr}</span>}
                      <span className="sk-name">{s.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="panel" aria-live="polite" aria-label="Skill details">
            {!skill ? (
              <>
                <p className="mono acc">Trace a skill</p>
                <p className="panel-title">Pick any technology to see the roles and projects it shipped in.</p>
                <div className="row">
                  {quick.map(s => <button key={s.name} type="button" className="textbtn" onClick={() => pick(s)}>{s.name}</button>)}
                </div>
              </>
            ) : (
              <>
                <div className="row between">
                  <p className="mono acc">{skill.cat}</p>
                  <button type="button" className="iconbtn" aria-label="Clear selected skill" onClick={() => setSkill(null)}><Icon d={X} /></button>
                </div>
                <div className="row">
                  {skill.logo && <img src={logo(skill.logo)} alt="" width="48" height="48" className="panel-logo" />}
                  <h3 className="panel-name">{skill.name}</h3>
                </div>
                <p className="mono dim">{used.length ? `Used in ${used.length} ${used.length === 1 ? 'place' : 'places'}` : 'Résumé toolkit'}</p>
                {used.length ? (
                  <ul className="uses">
                    {used.map(u => (
                      <li key={u.name}>
                        <span className="mono acc uses-kind">{u.kind}</span>
                        <span className="uses-txt"><span className="uses-name">{u.name}</span><span className="dim">{u.meta}</span></span>
                      </li>
                    ))}
                  </ul>
                ) : <p className="soft">On my résumé toolkit.</p>}
                {hasProjects && <a className="lnk" href="#projects">See highlighted projects <Icon d={DOWN} size={16} /></a>}
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

function Projects({ skill, setSkill }) {
  return (
    <section id="projects" className="sec" aria-labelledby="pj-h">
      <div className="wrap sec-grid">
        <SectionHead n="04" label="Projects" id="pj-h" title="Selected work" lede="Agentic AI, microservices and cloud-native builds from hackathons and SMU coursework." />
        <div className="stack">
          {skill && (
            <div className="banner" role="status">
              <span>Highlighting work that uses <strong>{skill.name}</strong></span>
              <button type="button" className="textbtn" onClick={() => setSkill(null)}>Show all <Icon d={X} size={16} /></button>
            </div>
          )}

          <article className={'feat dimmable' + dim(skill, featured.stack)} aria-labelledby="feat-h">
            <div className="feat-main">
              <div className="row"><span className="mono dim">P/01 — Featured</span><span className="tag">{featured.award}</span></div>
              <h3 id="feat-h" className="feat-name">{featured.name}</h3>
              <p className="mono soft">{featured.kind}</p>
              <p className="feat-blurb">{featured.blurb}</p>
              <ul className="pts" style={{ margin: 0 }}>{featured.points.map(p => <li key={p}>{p}</li>)}</ul>
              <Chips stack={featured.stack} skill={skill} />
              <div className="row"><a className="ghost" href={featured.repo} target="_blank" rel="noreferrer">View repository <Icon d={OUT} size={16} /></a></div>
            </div>
            <div className="feat-metrics">
              {featured.metrics.map(m => <div key={m.value} className="metric"><b>{m.value}</b><span className="soft">{m.label}</span></div>)}
            </div>
          </article>

          <div className="cards">
            {projects.map((p, i) => (
              <article key={p.name} className={'card dimmable' + dim(skill, p.stack)}>
                <div className="row between"><span className="mono dim">P/0{i + 2}</span><span className="mono soft small">{p.context}</span></div>
                {p.award && <span className="tag">{p.award}</span>}
                <div>
                  <h3>{p.name}</h3>
                  <p className="mono acc small">{p.kind}</p>
                </div>
                <p className="soft">{p.blurb}</p>
                <ul className="pts" style={{ margin: 0, fontSize: 14 }}>{p.points.map(t => <li key={t}>{t}</li>)}</ul>
                <div style={{ marginTop: 'auto' }}><Chips stack={p.stack} skill={skill} /></div>
                <div className="row"><Links links={p.links} /></div>
              </article>
            ))}
          </div>
          <a className="lnk" href={GITHUB} target="_blank" rel="noreferrer">More on github.com/oreoolis <Icon d={OUT} size={15} /></a>
        </div>
      </div>
    </section>
  );
}

// Numbered editorial accordion, adapted from 21st.dev "Editorial service list".
function Awards() {
  const [open, setOpen] = useState(0);
  return (
    <section id="awards" className="sec" aria-labelledby="aw-h">
      <div className="wrap sec-grid">
        <SectionHead n="05" label="Recognition" id="aw-h" title="Awards & certs" lede="One certification and four competitions. Open a row for the detail." />
        <div className="aw">
          {awards.map((a, i) => (
            <div key={a.title} className={open === i ? 'aw-row open' : 'aw-row'}>
              <button type="button" className="aw-btn" aria-expanded={open === i} aria-controls={`aw-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="mono aw-n">0{i + 1}</span>
                <span className="aw-title">{a.title}</span>
                <span className="mono aw-res">{a.result}</span>
                <span className="aw-chev" aria-hidden="true"><Icon d={['m9 18 6-6-6-6']} size={16} /></span>
              </button>
              <div id={`aw-${i}`} className="aw-panel" aria-hidden={open !== i}>
                <div className="aw-inner">
                  <div className="aw-body">
                    {a.logo && <img src={logo(a.logo)} alt="" width="44" height="44" />}
                    <div className="aw-text">
                      <p className="mono dim small">{a.meta}</p>
                      <p className="soft">{a.detail}</p>
                      {a.href && <Links links={[{ label: a.linkLabel, href: a.href }]} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="sec contact" aria-labelledby="ct-h">
      <div className="wrap stack-lg">
        <div className="row"><span className="hatch" aria-hidden="true" /><p className="mono acc">06 — Contact</p></div>
        <h2 id="ct-h" className="contact-title">Let's build something.</h2>
        <div className="row between end">
          <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <div className="row">
            <a className="ghost" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <Icon d={OUT} size={16} /></a>
            <a className="ghost" href={GITHUB} target="_blank" rel="noreferrer">GitHub <Icon d={OUT} size={16} /></a>
            <a className="btn" href={RESUME_URL} target="_blank" rel="noreferrer">Résumé <Icon d={DL} size={16} /></a>
          </div>
        </div>
        <footer className="row between foot">
          <span className="mono dim small">© 2026 Dwayne Otero — Singapore</span>
          <a className="mono lnk small soft" href="#top">Back to top <Icon d={UP} size={14} /></a>
        </footer>
        <p className="watermark" aria-hidden="true">Dwayne Otero</p>
      </div>
    </section>
  );
}

export default function App() {
  const [skill, setSkill] = useState(null);
  return (
    <div className="site" id="top">
      <Hero />
      <LogoLoop />
      <Education />
      <Experience skill={skill} />
      <Skills skill={skill} setSkill={setSkill} />
      <Projects skill={skill} setSkill={setSkill} />
      <Awards />
      <Contact />
    </div>
  );
}
