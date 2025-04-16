import { Link } from 'react-router-dom'

function HomeNavigation() {
  return (
    <div className="home-container">
      <nav className="nav-container">
        <div>
          <Link to="/side-effects">Side Effects</Link>
        </div>
      </nav>
    </div>
  )
}

export default HomeNavigation
