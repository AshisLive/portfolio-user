import { useScrollReveal } from '../hooks/useScrollReveal'

const SERVICES = [
  { icon: '🎬', title: 'Video Editing', desc: 'High-quality edits for YouTube, reels, ads and social media' },
  { icon: '🤖', title: 'AI Video Generation', desc: 'Create engaging AI-generated content for fast scaling' },
  { icon: '✍️', title: 'Content Creation', desc: 'Strategic content planning for growth and engagement' },
  { icon: '📊', title: 'Google Ads', desc: 'Performance-driven campaigns for leads and sales' },
  { icon: '📱', title: 'Facebook Ads', desc: 'Targeted ads to reach the right audience effectively' },
  { icon: '💻', title: 'Website Development', desc: 'Modern, fast, and conversion-focused websites' },
  { icon: '🎯', title: 'Brand Strategy', desc: 'Complete branding and positioning solutions' },
]

export default function Services() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className={`section-header-center reveal${visible ? ' revealed' : ''}`} ref={ref} style={{textAlign:'center'}}>
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Services That <span className="gradient-text">Drive Results</span></h2>
          <div className="glow-divider" style={{margin:'14px auto 0'}} />
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal rd${Math.min(i+1,6)}${visible ? ' revealed' : ''}`}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-arrow">Get started →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
