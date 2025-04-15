import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseEffectAtRender from './components/sideeffects/1UseEffectAtRender'
import UseEffectAtPageLoad from './components/sideeffects/2UseEffectAtPageLoad'
import UseEffectAtStateChange from './components/sideeffects/3UseEffectAtStateChange'
import HomeNavigation from './navigation/HomeNavigation'
import SideEffectNavigation from './navigation/SideEffectNavigation'
import UseEffectWithLocalStorage from './components/sideeffects/4UseEffectWithLocalStorage'
import UseEffectWithCallback from './components/sideeffects/5UseEffectWithCallback'

function App() {


  return (
    <BrowserRouter>
      <HomeNavigation />

      <Routes>
        <Route path="/" element={<div />} />

        {/* Side Effects */}
        <Route path="/side-effects" element={<SideEffectNavigation />} />
        <Route
          path="/side-effects/useEffectAtRender"
          element={<UseEffectAtRender />}
        />
        <Route
          path="/side-effects/useEffectAtPageLoad"
          element={<UseEffectAtPageLoad />}
        />
        <Route
          path="/side-effects/useEffectAtStateChange"
          element={<UseEffectAtStateChange />}
        />
        <Route
          path="/side-effects/useEffectWithLocalStorage"
          element={<UseEffectWithLocalStorage />}
        />        <Route
          path="/side-effects/useEffectWithCallback"
          element={<UseEffectWithCallback />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
