import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>VS</a>
          <ul className="nav-links">
            {['about','services','portfolio','process','contact'].map(id => (
              <li key={id}><a onClick={() => scrollTo(id)} style={{cursor:'pointer'}}>{id.charAt(0).toUpperCase()+id.slice(1)}</a></li>
            ))}
          </ul>
          <a className="nav-cta nav-cta-desktop" onClick={() => scrollTo('contact')} style={{cursor:'pointer'}}>Let's Talk</a>
          <button className="menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {['about','services','portfolio','process','contact'].map(id => (
          <a key={id} onClick={() => scrollTo(id)} style={{cursor:'pointer'}}>{id.charAt(0).toUpperCase()+id.slice(1)}</a>
        ))}
        <a onClick={() => scrollTo('contact')} style={{cursor:'pointer',color:'var(--accent)',fontWeight:600}}>Let's Talk →</a>
      </div>
    </>
  )
}
