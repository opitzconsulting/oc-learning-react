'use client'

import { useEffect, useState } from 'react'

function UseEffectAtRender() {
  const [tick, setTick] = useState(0)

  // 1. Läuft bei jedem Render - in der Regel ganz böse!
  useEffect(() => {
    console.log('Komponente gerendert')

    if (tick < 10000) {
      setTick((prev) => prev + 1)
    }
  })

  return (
    <>
      <h2>useEffect at Render!</h2>
      <p>Loop: {tick}</p>
    </>
  )
}

export default UseEffectAtRender
