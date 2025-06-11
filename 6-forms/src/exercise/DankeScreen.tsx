import { useLocation } from "react-router-dom"

function DankeScreen() {
  const location = useLocation()
  const name = (location.state && (location.state as any).name) || ''

  return (
    <div>
      <h2>Danke, {name}!</h2>
      <p>Deine Nachricht wurde erfolgreich übermittelt.</p>
    </div>
  )
}
export default DankeScreen