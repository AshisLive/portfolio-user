import { useScrollReveal } from '../hooks/useScrollReveal'

const ITEMS = [
  {
    type: 'video',
    title: 'Ad Video Project',
    desc: 'High converting ad creative',
    bg: 'linear-gradient(135deg,#1a0533,#7c3aed,#a78bfa)',
    badge: '#7c3aed',
    icon: '🎬',
    label: 'Video'
  },
  {
    type: 'website',
    title: 'Landing Page Design',
    desc: 'Modern UI/UX website',
    bg: 'linear-gradient(135deg,#001a33,#0284c7,#22d3ee)',
    badge: '#0284c7',
    icon: '💻',
    label: 'Website'
  },
  {
    type: 'marketing',
    title: 'Ad Campaign',
    desc: 'Lead generation campaign results',
    bg: 'linear-gradient(135deg,#1a0a00,#ea580c,#fb923c)',
    badge: '#ea580c',
    icon: '📊',
    label: 'Marketing'
  },
]

export default function Portfolio() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className={`reveal${visible ? ' revealed' : ''}`} ref={ref} style={{textAlign:'center'}}>
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="glow-divider" style={{margin:'14px auto 0'}} />
        </div>

        <div className="portfolio-grid">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`portfolio-card reveal rd${i+1}${visible ? ' revealed' : ''}`}
            >
              <div className="portfolio-card-bg" style={{background: item.bg}}>
                <span className="portfolio-icon">{item.icon}</span>
              </div>
              <div className="portfolio-card-overlay" style={{background:'rgba(11,11,15,0.5)'}}>
                <span style={{color:'white',fontWeight:700,fontSize:'1rem'}}>View Project</span>
                <span style={{color:'var(--accent)',fontSize:'1.5rem'}}>→</span>
              </div>
              <div className="portfolio-card-info">
                <span className="portfolio-badge" style={{background:`${item.badge}22`,color:item.badge,border:`1px solid ${item.badge}55`}}>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
