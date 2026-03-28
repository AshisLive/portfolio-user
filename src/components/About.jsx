import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid" ref={ref}>

          {/* Visual Card */}
          <div className={`reveal${visible ? ' revealed' : ''}`}>
            <div className="about-card">
              <div className="about-avatar">VS</div>
              <div className="about-card-name">Vipin Singh</div>
              <div className="about-card-role">Video · AI · Marketing Expert</div>
              <div className="about-stats">
                {[
                  { n: '50+', l: 'Projects Done' },
                  { n: '3+',  l: 'Years Exp.' },
                  { n: '30+', l: 'Happy Clients' },
                  { n: '100%', l: 'Committed' },
                ].map(s => (
                  <div className="stat-item" key={s.l}>
                    <div className="stat-number">{s.n}</div>
                    <div className="stat-label">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`about-text reveal rd2${visible ? ' revealed' : ''}`}>
            <span className="section-tag">About Me</span>
            <h2>The Person Behind<br /><span className="gradient-text">the Strategy</span></h2>
            <div className="glow-divider" />
            <p>Hi, I'm Vipin Singh. I help brands, creators, and businesses grow using high-quality video editing, AI-generated content, and powerful marketing strategies.</p>
            <p>I provide complete solutions — from content creation to website development and paid advertising. My goal is to deliver results that actually move the needle for your business.</p>
            <div className="about-tags">
              {['Video Editing','AI Content','Google Ads','Facebook Ads','Web Dev','Brand Strategy'].map(t => (
                <span className="about-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
