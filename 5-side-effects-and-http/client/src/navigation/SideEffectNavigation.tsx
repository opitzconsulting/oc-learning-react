import { Link } from 'react-router-dom'

function SideEffectNavigation() {
  return (
    <div className="side-effects-container">
      <h2>Side Effects</h2>
      <nav className="nav-container">
        <Link to="/side-effects/useEffectAtRender">UseEffect at Render</Link>
        <Link to="/side-effects/useEffectAtPageLoad">
          UseEffect at Page Load
        </Link>
        <Link to="/side-effects/useEffectAtStateChange">
          UseEffect at State Change
        </Link>
        <Link to="/side-effects/useEffectWithLocalStorage">
          UseEffect With Local Storage
        </Link>
        <Link to="/side-effects/useEffectWithCallback">
          UseEffect With Callback
        </Link>
        <Link to="/side-effects/useEffectWithFetch">
          UseEffect With Fetch 
        </Link>
        <Link to="/side-effects/useEffectExerciseScreen1">
          Exercise Screen 1
        </Link>
      </nav>
    </div>
  )
}

export default SideEffectNavigation
