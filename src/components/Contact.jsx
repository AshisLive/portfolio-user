import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const { ref, visible } = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className={`reveal${visible ? ' revealed' : ''}`} ref={ref} style={{textAlign:'center'}}>
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's <span className="gradient-text">Work Together</span></h2>
          <div className="glow-divider" style={{margin:'14px auto 0'}} />
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className={`reveal rd1${visible ? ' revealed' : ''}`}>
            <h3>Grow your brand with me 🚀</h3>
            <p>Ready to take your brand to the next level? Whether you need videos, ads, or a new website — I've got you covered.</p>
            <div className="contact-links">
              <a
                href="https://wa.me/919XXXXXXXXX?text=Hi%20Vipin%2C%20I%27d%20like%20to%20work%20with%20you!"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-link-icon" style={{background:'rgba(37,211,102,0.15)',border:'1px solid rgba(37,211,102,0.2)'}}>
                  💬
                </div>
                <div>
                  <div style={{fontSize:'0.78rem',color:'var(--text-secondary)',marginBottom:2}}>WhatsApp</div>
                  <div>Chat with me directly</div>
                </div>
              </a>
              <a
                href="mailto:vipinsingh@email.com"
                className="contact-link"
              >
                <div className="contact-link-icon" style={{background:'rgba(124,58,237,0.15)',border:'1px solid rgba(124,58,237,0.2)'}}>
                  ✉️
                </div>
                <div>
                  <div style={{fontSize:'0.78rem',color:'var(--text-secondary)',marginBottom:2}}>Email</div>
                  <div>vipinsingh@email.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className={`reveal rd2${visible ? ' revealed' : ''}`}>
            <div className="contact-form">
              {sent ? (
                <div className="success-msg">
                  <div style={{fontSize:'2.5rem',marginBottom:12}}>🎉</div>
                  <div style={{fontSize:'1.2rem',fontWeight:700,marginBottom:8}}>Message Sent!</div>
                  <div style={{color:'var(--text-secondary)',fontSize:'0.9rem'}}>I'll get back to you within 24 hours.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" name="name" className="form-input" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" className="form-input" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" className="form-input" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
