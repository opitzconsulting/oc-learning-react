import { Link } from 'react-router-dom'

function HomeNavigation() {
  return (
    <div className="home-container">
      <nav className="nav-container">
          <Link to="/componentTests">Componenttests</Link>
          <Link to="/forms">Übgungsaufgabe</Link>
      </nav>
    </div>
  )
}

export default HomeNavigation
