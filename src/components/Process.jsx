import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  { n: '01', title: 'Understand Your Brand', desc: 'Deep dive into your goals, audience, and competitive landscape' },
  { n: '02', title: 'Create Strategy', desc: 'Build a data-driven plan for content, ads, and digital presence' },
  { n: '03', title: 'Execute & Deliver', desc: 'Video, ads, and website crafted with precision and creativity' },
  { n: '04', title: 'Optimize & Scale', desc: 'Analyze results and scale what works for maximum ROI' },
]

export default function Process() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className={`reveal${visible ? ' revealed' : ''}`} ref={ref} style={{textAlign:'center'}}>
          <span className="section-tag">How I Work</span>
          <h2 className="section-title">A Process Built for <span className="gradient-text">Results</span></h2>
          <div className="glow-divider" style={{margin:'14px auto 0'}} />
        </div>

        <div className="process-grid">
          {STEPS.map((s, i) => (
            <div key={s.n} className={`process-step reveal rd${i+1}${visible ? ' revealed' : ''}`}>
              <div className="process-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
