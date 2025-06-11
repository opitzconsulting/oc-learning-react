import { useEffect, useState } from 'react'
import { getThemeData, Theme } from '../../services/ThemeFetch'
import ThemeBox from './ThemeBox'
import { Link } from 'react-router-dom'

function UseEffectExerciseScreen1() {
  const [themes, setThemes] = useState<Theme[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredThemes, setFilteredThemes] = useState<Theme[]>([])

  useEffect(() => {
    getThemeData()
      .then((response) => {
        setThemes(response)
        setFilteredThemes(response)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchTerm(value)
    const filtered = themes.filter((theme) =>
      theme.name.toLowerCase().includes(value.toLowerCase()),
    )
    setFilteredThemes(filtered)
  }

  return (
    <>
      <h2>Wähle einen theme aus</h2>
      <p>Die Auswahl des Themes wird in der App gespeichert.</p>
      <Link to={'/side-effects/useEffectExerciseScreen2'}>
        Zur Ergebnisseite
      </Link>

      <br />
      <br />
      
      <label>
        Theme suchen:
        <input
          type="text"
          placeholder="Theme suchen..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </label>

      <br />
      <br />
      {themes && (
        <ul>
          {filteredThemes.map((theme) => (
            <li key={theme.id} style={{ marginBottom: '20px' }}>
              <ThemeBox theme={theme} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default UseEffectExerciseScreen1
