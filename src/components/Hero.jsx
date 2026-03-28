export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      {/* Animated background */}
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for new projects
        </div>

        <h1 className="hero-headline">
          I Build &amp; Scale Brands<br />
          <span className="gradient-text">with Video, AI</span> &amp; Marketing
        </h1>

        <p className="hero-sub">
          Video Editing &nbsp;·&nbsp; AI Video Generation &nbsp;·&nbsp; Ads &nbsp;·&nbsp; Website Development
        </p>

        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Get Started →
          </button>
          <button className="btn-outline" onClick={() => scrollTo('portfolio')}>
            View My Work
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
