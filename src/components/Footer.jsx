export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">Vipin Singh</div>
        <ul className="footer-links">
          {['about','services','portfolio','process','contact'].map(id => (
            <li key={id}>
              <a onClick={() => scrollTo(id)} style={{cursor:'pointer'}}>
                {id.charAt(0).toUpperCase()+id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-copy">© {year} Vipin Singh. All rights reserved.</div>
      </div>
    </footer>
  )
}
