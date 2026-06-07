import './App.css'

function App() {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#work', label: 'Work' },
    { href: '#contacts', label: 'Contacts' },
    { href: '#case-studies', label: 'Case Studies' },
  ] as const

  const skills = [
    'User Research',
    'Wireframing',
    'Digital Marketing',
    'Critical Thinking',
    'Communication',
    'Prototyping',
    'User Flow',
    'Collaboration',
    'Empathy',
    'Visuals & UI',
  ] as const

  const featuredWorks = [
    { title: 'AiGeeks', kind: 'Product', imageKey: 'aigeeks' },
    { title: 'Mobicharge', kind: 'Product', imageKey: 'mobicharge' },
    { title: 'Grantify', kind: 'Product', imageKey: 'grantify' },
  ] as const

  const caseStudies = [
    {
      number: '01',
      year: '2023',
      title: 'Grantify.ae',
      description:
        'Grantify is an education matching platform that connects students and universities through data-driven insights, enabling smarter opportunity discovery and efficient admissions.',
      imageKey: 'grantify',
    },
    {
      number: '01',
      year: '2023',
      title: 'CONNECTIONS NETWORKING',
      description:
        'Connections is a professional networking platform that enables meaningful discussions, expert knowledge sharing, and credibility building through purposeful conversations and community-driven insights.',
      imageKey: 'connections',
    },
    {
      number: '01',
      year: '2023',
      title: 'The FABCREW',
      description:
        'The Fab Crew is a trusted home and commercial cleaning and maintenance company in Dubai, delivering reliable, high-quality services backed by professional teams and streamlined booking.',
      imageKey: 'fabcrew',
    },
  ] as const

  const galleryImages = [
    { imageKey: 'gallery-1', alt: 'Graphics gallery item 1' },
    { imageKey: 'gallery-2', alt: 'Graphics gallery item 2' },
    { imageKey: 'gallery-3', alt: 'Graphics gallery item 3' },
    { imageKey: 'gallery-4', alt: 'Graphics gallery item 4' },
    { imageKey: 'gallery-5', alt: 'Graphics gallery item 5' },
    { imageKey: 'gallery-6', alt: 'Graphics gallery item 6' },
  ] as const

  return (
    <>
      <section id="home" className="hero">
        <div className="hero__bg" aria-hidden="true" />

        <header className="topbar">
          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} className="nav__link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="container hero__content">
          <div className="hero__headline">
            <h1 className="hero__title">Designs that add value to your</h1>
            <div className="hero__wordmark" aria-hidden="true" />
            <p className="hero__subtitle">Digital Product &amp; Experience Designer</p>
          </div>

          <div className="hero__art" aria-hidden="true" />
        </div>
      </section>

      <section id="about" className="section section--about">
        <div className="container about">
          <div className="about__text">
            <p>
              Behind every screen is a person with real frustrations, real goals, and
              real moments of delight. I design products that feel intuitive, honest,
              and alive not just beautiful interfaces, but experiences that genuinely
              make life a little easier.
            </p>
            <p>
              That’s where <span className="accent">जीवन</span> comes in a Nepali word
              meaning <span className="accent">life</span>. For me, design goes beyond
              visuals; it’s about creating experiences that feel human, meaningful,
              and alive.
            </p>
            <p>
              Rooted in <span className="accent">नेपाल</span>, shaped by curiosity,
              built for the world.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section section--featured">
        <div className="container">
          <div className="sectionTitle">
            <h2>Featured Works</h2>
            <p>Check out my latest projects</p>
          </div>

          <div className="featured__paper" aria-hidden="true" />

          <div className="cards cards--featured">
            {featuredWorks.map((work) => (
              <article key={work.title} className="card card--featured">
                <div className={`card__thumb card__thumb--${work.imageKey}`} />
                <div className="card__meta">
                  <div className="card__title">{work.title}</div>
                  <div className="card__tag">{work.kind}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--skills">
        <div className="container">
          <h2 className="sectionHeading">Main Skills</h2>
          <div className="chips" role="list">
            {skills.map((skill) => (
              <div key={skill} className="chip" role="listitem">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="section section--caseStudies">
        <div className="container">
          <h2 className="sectionHeading">UX Case Studies</h2>
          <div className="cards cards--caseStudies">
            {caseStudies.map((cs) => (
              <article key={cs.title} className={`case case--${cs.imageKey}`}>
                <div className="case__top">
                  <div className="case__index">
                    <span className="case__number">{cs.number}</span>
                    <span className="case__year">{cs.year}</span>
                  </div>
                </div>
                <div className="case__content">
                  <h3 className="case__title">{cs.title}</h3>
                  <p className="case__desc">{cs.description}</p>
                  <a className="case__link" href="#contacts">
                    Read Case Study
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="section section--gallery">
        <div className="container">
          <h2 className="sectionHeading">Graphics Gallery</h2>
          <div className="gallery">
            {galleryImages.map((img) => (
              <div
                key={img.imageKey}
                className={`gallery__item gallery__item--${img.imageKey}`}
                role="img"
                aria-label={img.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__bg" aria-hidden="true" />
        <div className="container footer__content">
          <div className="footer__identity">
            <div className="footer__name">Jeevan Khatiwada</div>
            <div className="footer__role">Product Designer</div>
          </div>
          <div className="footer__socials">
            <div className="footer__label">Socials</div>
            <div className="footer__links">
              <a className="footer__link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="footer__link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
            <div className="footer__handle">@DESIGNWITHJEEVAN</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
