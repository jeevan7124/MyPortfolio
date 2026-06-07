import { useEffect, useMemo, useState } from 'react'
import './App.css'

import grantifyLogo from './assets/figma/grantify-grantify-logo-1-1-75_1141.svg'
import grantifyHero from './assets/figma/grantify-frame-1000003044-75_1159.png'
import grantifyIconBag from './assets/figma/grantify-bag-svg-75_1165.svg'
import grantifyIconAppWindow from './assets/figma/grantify-appwindow-svg-75_1175.svg'
import grantifyIconWeb from './assets/figma/grantify-streamline-plump-web-75_1182.svg'
import grantifyIconAI from './assets/figma/grantify-mingcute-ai-fill-75_1263.svg'
import grantifyIconVerify from './assets/figma/grantify-bitcoin-icons-verify-filled-75_1271.svg'
import grantifyIconTransparent from './assets/figma/grantify-streamline-plump-transparent-remix-75_1277.svg'
import grantifyIconScissors from './assets/figma/grantify-heroicons-scissors-solid-75_1283.svg'

import connectionsLogo from './assets/figma/connections-image-removebg-preview-2-1-1-1-75_1438.png'
import connectionsHero from './assets/figma/connections-video-75_1440.png'
import connectionsIconBag from './assets/figma/connections-bag-svg-75_1349.svg'
import connectionsIconAppWindow from './assets/figma/connections-appwindow-svg-75_1359.svg'
import connectionsIconWeb from './assets/figma/connections-streamline-plump-web-75_1366.svg'
import connectionsIconChat from './assets/figma/connections-hugeicons-bubble-chat-75_2145.svg'
import connectionsIconGroup from './assets/figma/connections-hugeicons-user-group-75_2153.svg'
import connectionsIconBrain from './assets/figma/connections-icon-park-twotone-brain-75_2162.svg'
import connectionsIconBadge from './assets/figma/connections-carbon-badge-75_2170.svg'
import connectionsIconDate from './assets/figma/connections-fluent-mdl2-date-time-2-75_2019.svg'
import connectionsIconTime from './assets/figma/connections-fluent-mdl2-date-time-2-75_2023.svg'
import connectionsIconLocation from './assets/figma/connections-line-md-map-marker-75_2027.svg'
import journeyHero from './assets/figma/image-11-49_794.png'
import aiGeeksLogo from './assets/figma/image-12-75_53.png'
import fabCrewLogo from './assets/figma/fab-crew-logo-1-74_1680.png'

function App() {
  const [hash, setHash] = useState(() => window.location.hash || '#home')

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const route = useMemo(() => {
    const normalized = hash.trim() || '#home'
    if (normalized.startsWith('#case-grantify')) return 'case-grantify'
    if (normalized.startsWith('#case-connections')) return 'case-connections'
    if (normalized.startsWith('#journey')) return 'journey'
    return 'home'
  }, [hash])

  useEffect(() => {
    if (route !== 'home') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    if (hash === '#home' || hash === '') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [hash, route])

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
    { title: 'AiGeeks', kind: 'Product', imageKey: 'aigeeks', logoSrc: aiGeeksLogo },
    { title: 'Mobicharge', kind: 'Product', imageKey: 'mobicharge' },
    { title: 'Grantify', kind: 'Product', imageKey: 'grantify', logoSrc: grantifyLogo },
  ] as const

  const caseStudies = [
    {
      number: '01',
      year: '2023',
      title: 'Grantify.ae',
      description:
        'Grantify is an education matching platform that connects students and universities through data-driven insights, enabling smarter opportunity discovery and efficient admissions.',
      imageKey: 'grantify',
      href: '#case-grantify',
      logoSrc: grantifyLogo,
    },
    {
      number: '01',
      year: '2023',
      title: 'CONNECTIONS NETWORKING',
      description:
        'Connections is a professional networking platform that enables meaningful discussions, expert knowledge sharing, and credibility building through purposeful conversations and community-driven insights.',
      imageKey: 'connections',
      href: '#case-connections',
      logoSrc: connectionsLogo,
    },
    {
      number: '01',
      year: '2023',
      title: 'The FABCREW',
      description:
        'The Fab Crew is a trusted home and commercial cleaning and maintenance company in Dubai, delivering reliable, high-quality services backed by professional teams and streamlined booking.',
      imageKey: 'fabcrew',
      href: '#contacts',
      logoSrc: fabCrewLogo,
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

  const caseStudyData = {
    grantify: {
      title: 'Turning Scholarship Search into Success with Grantify',
      logoSrc: grantifyLogo,
      heroSrc: grantifyHero,
      meta: [
        { label: 'Industries', value: 'Education, EdTech', icon: grantifyIconBag },
        {
          label: 'Use-case',
          value: 'Scholarship discovery\nPersonalized recommendations',
          icon: grantifyIconAppWindow,
        },
        { label: 'Web link', value: 'grantify.ae', icon: grantifyIconWeb },
      ],
      body: [
        {
          heading: 'Challenge',
          text: "Students today face a fragmented and overwhelming process: endless browsing across dozens of university websites, confusing eligibility criteria, no way to gauge their actual chances before applying, programs that don't match their budget or goals, and no clear direction amid too many options.",
        },
        {
          heading: 'Solution',
          text: 'Grantify addresses each challenge directly. Profile-based matches replace blind searching, eligibility insights are shown before applying, programs are filtered by scores, budget, and goals, and the number of applications needed is reduced by focusing only on high-fit options. The platform guides students transparently from discovery all the way to shortlisting.',
        },
        {
          heading: 'Overview',
          blocks: [
            {
              title: 'Introduction',
              text: "Grantify is a next-generation university discovery platform built for the modern student, one who is ambitious, globally-minded, and tired of navigating a broken, biased, and overwhelming application process. Founded on the belief that every student deserves access to the right education regardless of their background or budget, Grantify flips the traditional model entirely: instead of students chasing universities, universities compete for students.\n\nAt its core, Grantify is powered by an intelligent AI matching engine that analyzes each student's academic profile, financial situation, destination preferences, and career aspirations to surface the most relevant university programs across dozens of countries and hundreds of partner institutions.",
            },
            {
              title: 'Grantify makes everything easier',
              text: "Applying for a scholarship has always felt like a second job, requiring students to hunt across dozens of websites, decode confusing eligibility criteria, and submit applications with little confidence they even qualify. Grantify changes that entirely by weaving scholarship access directly into the university discovery process, making it feel less like a task and more like a natural next step.",
            },
          ],
        },
      ],
      capabilities: [
        {
          title: 'Smart Recommendations',
          text: 'Get recommendations that match your academics, budget, destination, and goals so you focus on the right options, not endless filtering.',
          icon: grantifyIconAI,
        },
        {
          title: 'Verified Program Information',
          text: 'All program details come directly from partner universities, ensuring accurate, up-to-date information on requirements, deadlines, and eligibility.',
          icon: grantifyIconVerify,
        },
        {
          title: 'Transparent Cost & Duration',
          text: 'We present transparent program options and clear cost breakdowns, so you know exactly what to expect no confusion, no hidden details, just smarter decisions.',
          icon: grantifyIconTransparent,
        },
        {
          title: 'Tailored Offers',
          text: 'Universities can create personalized scholarship offers based on a student’s profile, rewarding bright and talented students while supporting their academic journey and future potential.',
          icon: grantifyIconScissors,
        },
      ],
    },
    connections: {
      title: 'Turning Professional Conversations into Meaningful Network',
      logoSrc: connectionsLogo,
      heroSrc: connectionsHero,
      meta: [
        { label: 'Industries', value: 'Business , Network', icon: connectionsIconBag },
        {
          label: 'Use-case',
          value: 'Networking\nBusiness Meetings',
          icon: connectionsIconAppWindow,
        },
        { label: 'Web link', value: 'connectionsdbx.com', icon: connectionsIconWeb },
      ],
      body: [
        {
          heading: 'Challenge',
          text: 'Modern professional networking platforms are crowded, noisy, and engineered for engagement at the expense of meaning. Professionals are forced to navigate endless feeds dominated by self-promotion, recycled content, and hollow endorsements making it nearly impossible to surface genuine expertise, ask the questions that actually matter, or build credibility through substantive contribution.',
        },
        {
          heading: 'Solution',
          text: 'Connections provides a focused, discussion-first professional network built around purposeful questions, expert insights, and community-driven dialogue. By replacing vanity metrics with contribution quality, and replacing passive scrolling with active intellectual exchange, Connections gives professionals a platform where credibility is earned through the depth of their thinking not the size of their following.',
        },
        {
          heading: 'Overview',
          blocks: [
            {
              title: 'Introduction',
              text: 'Connections is a next-generation professional networking platform built for the modern professional one who is intellectually curious, genuinely collaborative, and deeply frustrated by the noise, performative posting, and metric-chasing that has hollowed out professional networking for years.',
            },
            {
              title: 'Connections Makes Networking Meaningful',
              text: 'Professional networking has always felt like a performance requiring professionals to craft carefully worded posts, accumulate connections they will never speak to, and measure their value in likes rather than in the quality of what they contribute. Connections changes that entirely by weaving genuine intellectual exchange directly into the networking experience.',
            },
          ],
        },
      ],
      events: {
        title: 'Upcoming Events',
        subtitle: 'Browse and register for our upcoming events',
        cta: 'View all events',
        sections: [
          {
            label: 'Happening Today',
            items: [
              {
                title: 'Coffee Morning',
                date: 'Friday, August 15, 2025',
                time: '7:15am',
                location: 'Siddharta Lounge by Buddha-Bar...',
              },
              {
                title: 'Coffee Morning',
                date: 'Friday, August 15, 2025',
                time: '7:15am',
                location: 'Siddharta Lounge by Buddha-Bar...',
              },
              {
                title: 'Evening Social',
                date: 'Friday, August 15, 2025',
                time: '7:15am',
                location: 'Siddharta Lounge by Buddha-Bar...',
              },
            ],
          },
        ],
      },
      capabilities: [
        {
          title: 'Insight-Driven Discussions',
          text: 'Centralizes company, payroll, and salary data into a single source of truth for accurate analysis and decision-making.',
          icon: connectionsIconChat,
        },
        {
          title: 'Curated Professional Community',
          text: 'Connect with founders, leaders, and professionals across industries in a high-signal environment designed for relevance and quality.',
          icon: connectionsIconGroup,
        },
        {
          title: 'Distraction-Free Experience',
          text: 'A clean, focused interface without reels, spam, or algorithmic clutter so conversations stay intentional and valuable.',
          icon: connectionsIconBrain,
        },
        {
          title: 'Credibility Through Contribution',
          text: 'Build your professional presence by contributing ideas, experience, and insight earning trust through participation, not promotion.',
          icon: connectionsIconBadge,
        },
      ],
    },
  } as const

  return (
    <>
      <header className="stickyNav">
        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive =
              link.href === '#work' ||
              (route !== 'home' && link.href === '#case-studies')
            return (
              <a
                key={link.href}
                className={`nav__link${isActive ? ' nav__link--active' : ''}`}
                href={link.href}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </header>

      {route === 'home' ? (
      <section id="home" className="hero">
        <div className="heroStageWrap">
          <div className="heroStage">
            <div className="heroStage__bg" aria-hidden="true" />

            <div className="heroStage__content">
              <div className="heroStage__header">
                <h1 className="heroStage__title">Designs that add value to your</h1>
                <div className="heroStage__wordmarkBox" aria-hidden="true">
                  <div className="heroStage__wordmark" />
                  <div className="heroStage__icon heroStage__icon--topLeft" />
                  <div className="heroStage__icon heroStage__icon--bottomRight" />
                </div>
              </div>
              <div className="heroStage__tv" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
      ) : null}

      {route === 'case-grantify' ? (
        <main className="casePage">
          <div className="casePage__frame">
            <div className="casePage__content">
              <header className="caseHeader">
                <h1 className="caseHeader__title">{caseStudyData.grantify.title}</h1>
                <img className="caseHeader__logo" src={caseStudyData.grantify.logoSrc} alt="" />
              </header>

              <img className="caseHero" src={caseStudyData.grantify.heroSrc} alt="" />

              <div className="caseMeta">
                {caseStudyData.grantify.meta.map((m) => (
                  <div key={m.label} className="metaCard">
                    <div className="metaCard__iconWrap" aria-hidden="true">
                      <img className="metaCard__icon" src={m.icon} alt="" />
                    </div>
                    <div className="metaCard__label">{m.label}</div>
                    <div className="metaCard__value">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="caseBody">
                {caseStudyData.grantify.body.map((section) => (
                  <section key={section.heading} className="caseBlock">
                    <h2 className="caseBlock__heading">{section.heading}</h2>
                    {'text' in section ? (
                      <p className="caseBlock__text">{section.text}</p>
                    ) : (
                      <div className="caseBlock__stack">
                        {section.blocks.map((b) => (
                          <div key={b.title} className="caseSubBlock">
                            <h3 className="caseSubBlock__title">{b.title}</h3>
                            <p className="caseSubBlock__text">{b.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              <section className="capabilities">
                <h2 className="capabilities__title">Capabilities</h2>
                <div className="capabilities__grid">
                  {caseStudyData.grantify.capabilities.map((c) => (
                    <article key={c.title} className="capability">
                      <div className="capability__iconWrap" aria-hidden="true">
                        <img className="capability__icon" src={c.icon} alt="" />
                      </div>
                      <div className="capability__body">
                        <div className="capability__name">{c.title}</div>
                        <div className="capability__text">{c.text}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      ) : null}

      {route === 'case-connections' ? (
        <main className="casePage">
          <div className="casePage__frame">
            <div className="casePage__content">
              <header className="caseHeader">
                <h1 className="caseHeader__title">{caseStudyData.connections.title}</h1>
                <img className="caseHeader__logo" src={caseStudyData.connections.logoSrc} alt="" />
              </header>

              <img className="caseHero" src={caseStudyData.connections.heroSrc} alt="" />

              <div className="caseMeta">
                {caseStudyData.connections.meta.map((m) => (
                  <div key={m.label} className="metaCard">
                    <div className="metaCard__iconWrap" aria-hidden="true">
                      <img className="metaCard__icon" src={m.icon} alt="" />
                    </div>
                    <div className="metaCard__label">{m.label}</div>
                    <div className="metaCard__value">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="caseBody">
                {caseStudyData.connections.body.map((section) => (
                  <section key={section.heading} className="caseBlock">
                    <h2 className="caseBlock__heading">{section.heading}</h2>
                    {'text' in section ? (
                      <p className="caseBlock__text">{section.text}</p>
                    ) : (
                      <div className="caseBlock__stack">
                        {section.blocks.map((b) => (
                          <div key={b.title} className="caseSubBlock">
                            <h3 className="caseSubBlock__title">{b.title}</h3>
                            <p className="caseSubBlock__text">{b.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              <section className="events">
                <div className="events__head">
                  <div>
                    <h2 className="events__title">{caseStudyData.connections.events.title}</h2>
                    <div className="events__subtitle">{caseStudyData.connections.events.subtitle}</div>
                  </div>
                  <a className="events__cta" href="#contacts">
                    {caseStudyData.connections.events.cta}
                  </a>
                </div>
                {caseStudyData.connections.events.sections.map((sec) => (
                  <div key={sec.label} className="events__section">
                    <div className="events__label">{sec.label}</div>
                    <div className="events__grid">
                      {sec.items.map((it, idx) => (
                        <article key={`${it.title}-${idx}`} className="eventCard">
                          <div className="eventCard__title">{it.title}</div>
                          <div className="eventCard__row">
                            <img
                              className="eventCard__icon"
                              src={connectionsIconDate}
                              alt=""
                              aria-hidden="true"
                            />
                            <div className="eventCard__text">
                              <span className="eventCard__strong">Date:</span> {it.date}
                            </div>
                          </div>
                          <div className="eventCard__row">
                            <img
                              className="eventCard__icon"
                              src={connectionsIconTime}
                              alt=""
                              aria-hidden="true"
                            />
                            <div className="eventCard__text">
                              <span className="eventCard__strong">Time:</span> {it.time}
                            </div>
                          </div>
                          <div className="eventCard__row">
                            <img
                              className="eventCard__icon"
                              src={connectionsIconLocation}
                              alt=""
                              aria-hidden="true"
                            />
                            <div className="eventCard__text">
                              <span className="eventCard__strong">Location:</span> {it.location}
                            </div>
                          </div>
                          <a className="eventCard__btn" href="#contacts">
                            RSVP
                          </a>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section className="capabilities">
                <h2 className="capabilities__title">Capabilities</h2>
                <div className="capabilities__grid">
                  {caseStudyData.connections.capabilities.map((c) => (
                    <article key={c.title} className="capability">
                      <div className="capability__iconWrap" aria-hidden="true">
                        <img className="capability__icon" src={c.icon} alt="" />
                      </div>
                      <div className="capability__body">
                        <div className="capability__name">{c.title}</div>
                        <div className="capability__text">{c.text}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      ) : null}

      {route === 'journey' ? (
        <main className="casePage">
          <div className="casePage__frame">
            <div className="casePage__content">
              <header className="caseHeader">
                <h1 className="caseHeader__title">My Journey</h1>
                <div className="events__subtitle">Checkout my Journey</div>
              </header>

              <img className="caseHero" src={journeyHero} alt="" />
            </div>
          </div>
        </main>
      ) : null}

      {route === 'home' ? (
        <>
          <section id="about" className="section section--about">
            <div className="container about">
              <div className="about__mark" aria-hidden="true" />
              <div className="about__text">
                <p>
                  Behind every screen is a person with real frustrations, real goals,
                  and real moments of delight. I design products that feel intuitive,
                  honest, and alive not just beautiful interfaces, but experiences
                  that genuinely make life a little easier.
                </p>
                <p>
                  That’s where <span className="accent">जीवन</span> comes in a Nepali
                  word meaning <span className="accent">life</span>. For me, design goes
                  beyond visuals; it’s about creating experiences that feel human,
                  meaningful, and alive.
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
                    <div className={`card__thumb card__thumb--${work.imageKey}`}>
                      {'logoSrc' in work ? (
                        <img className="featuredLogo" src={work.logoSrc} alt={`${work.title} logo`} />
                      ) : null}
                    </div>
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
              <div className="uxGrid">
                {caseStudies.map((cs, index) => (
                  <article
                    key={cs.title}
                    className={`uxItem ${index % 2 === 1 ? 'uxItem--reverse' : ''}`}
                  >
                    <div className={`uxVisual uxVisual--${cs.imageKey}`} aria-hidden="true">
                      <img className="uxVisual__logo" src={cs.logoSrc} alt="" />
                    </div>
                    <div className="uxCopy">
                      <div className="uxMetaRow">
                        <span className="uxDot" aria-hidden="true" />
                        <div className="uxMetaText">
                          <span className="uxMetaNumber">{cs.number}</span>
                          <span className="uxMetaSep">—</span>
                          <span className="uxMetaYear">{cs.year}</span>
                        </div>
                      </div>
                      <h3 className="uxTitle">{cs.title}</h3>
                      <p className="uxDesc">{cs.description}</p>
                      <a className="uxLink" href={cs.href}>
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
              <div className="graphicsGrid">
                <div
                  className="gItem gItem--topLeft gallery__item--gallery-2"
                  role="img"
                  aria-label={galleryImages[1].alt}
                />
                <div
                  className="gItem gItem--centerTall gallery__item--gallery-5 gItem--fold"
                  role="img"
                  aria-label={galleryImages[4].alt}
                />
                <div
                  className="gItem gItem--topRight gallery__item--gallery-4 gItem--fold"
                  role="img"
                  aria-label={galleryImages[3].alt}
                />
                <div
                  className="gItem gItem--midLeft gallery__item--gallery-1"
                  role="img"
                  aria-label={galleryImages[0].alt}
                />
                <div
                  className="gItem gItem--midRight gallery__item--gallery-6"
                  role="img"
                  aria-label={galleryImages[5].alt}
                />
                <div
                  className="gItem gItem--bottomCenter gallery__item--gallery-3 gItem--fold"
                  role="img"
                  aria-label={galleryImages[2].alt}
                />
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
                  <a
                    className="footer__link"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="footer__link"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    className="footer__link"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <div className="footer__handleBig">@DESIGNWITHJEEVAN</div>
            </div>
          </footer>
        </>
      ) : null}
    </>
  )
}

export default App
