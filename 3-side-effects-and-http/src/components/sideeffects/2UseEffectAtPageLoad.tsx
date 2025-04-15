import { useEffect, useState } from 'react'

function UseEffectAtPageLoad() {
  const [tick, setTick] = useState(0)

  //  2. Läuft nur einmal beim ersten Laden (Ausnahme: Dev Umgebung)
  //     - in der Prod Umgebung wird die Komponente nur einmal gerendert
  //     - in der Dev Umgebung wird die Komponente mehrmals gerendert (Strict Mode)
  useEffect(() => {
    console.log('Willkommen bei der useEffect-Demo!')

    setTick((prev) => prev + 1)
  }, [])

  return (
    <>
      <h2>🔧 useEffect At Page Load</h2>
      <p>Live-Tick: {tick} ...</p>
    </>
  )
}

export default UseEffectAtPageLoad
