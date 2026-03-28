import { useScrollReveal } from '../hooks/useScrollReveal'

const POINTS = [
  { icon: '🚀', title: 'Complete End-to-End Solution', desc: 'From strategy and content to ads and websites — everything under one roof.' },
  { icon: '⚡', title: 'AI-Powered Fast Delivery', desc: 'Leveraging cutting-edge AI tools to deliver high-quality work faster.' },
  { icon: '🎨', title: 'Modern & Creative Approach', desc: 'Fresh ideas with contemporary design sensibility and proven techniques.' },
  { icon: '📈', title: 'Results-Focused Execution', desc: 'Every decision is driven by data and aimed at measurable business growth.' },
]

export default function WhyChooseMe() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section" id="why">
      <div className="container">
        <div className={`reveal${visible ? ' revealed' : ''}`} ref={ref} style={{textAlign:'center'}}>
          <span className="section-tag">Why Choose Me</span>
          <h2 className="section-title">The Advantage You <span className="gradient-text">Can't Ignore</span></h2>
          <div className="glow-divider" style={{margin:'14px auto 0'}} />
        </div>

        <div className="why-grid">
          {POINTS.map((p, i) => (
            <div key={p.title} className={`why-card reveal rd${i+1}${visible ? ' revealed' : ''}`}>
              <div className="why-icon">{p.icon}</div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
