import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseEffectAtRender from './components/sideeffects/1UseEffectAtRender'
import UseEffectAtPageLoad from './components/sideeffects/2UseEffectAtPageLoad'
import UseEffectAtStateChange from './components/sideeffects/3UseEffectAtStateChange'
import HomeNavigation from './navigation/HomeNavigation'
import SideEffectNavigation from './navigation/SideEffectNavigation'
import UseEffectWithLocalStorage from './components/sideeffects/4UseEffectWithLocalStorage'
import UseEffectWithCallback from './components/sideeffects/5UseEffectWithCallback'
import UseEffectWithFetch from './components/sideeffects/6UseEffectWithFetch'
import UseEffectExerciseScreen1 from './components/exercise/UseEffectExerciseScreen1'
import UseEffectExerciseScreen2 from './components/exercise/UseEffectExerciseScreen2'

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
        />
        <Route
          path="/side-effects/useEffectWithCallback"
          element={<UseEffectWithCallback />}
        />
        <Route
          path="/side-effects/useEffectWithFetch"
          element={<UseEffectWithFetch />}
        />
        <Route
          path="/side-effects/useEffectExerciseScreen1"
          element={<UseEffectExerciseScreen1 />}
        />
        <Route
          path="/side-effects/useEffectExerciseScreen2"
          element={<UseEffectExerciseScreen2 />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
