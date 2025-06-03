import { useEffect, useState } from 'react'
import { Theme } from '../../services/ThemeFetch'
import ErrorScreen from './ErrorScreen'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function UseEffectExerciseScreen2() {
  const defaultTheme = {
    id: 0,
    name: '',
    colors: {
      background: '',
      text: '',
      primary: '',
      secondary: '',
    },
  }
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [themeError, setThemeError] = useState<string | null>(null)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme))
    } else {
      setThemeError('Kein Theme gewählt')
    }
  }, [])

  return (
    <>
      {themeError ? (
        <ErrorScreen themeError={themeError} />
      ) : (
        <div>
          <h2>UseEffect Exercise Screen 2</h2>
          <div>Gewähltes Theme: {theme.name}</div>

          <div
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <p style={{ color: theme.colors.text }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>

          <div
            style={{
              marginTop: '24px',
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link to={'/side-effects/useEffectExerciseScreen1'}>
              Zurück zu Themes
            </Link>

            {theme != defaultTheme && (
              <Button
                style={{ color: theme.colors.primary }}
                onClick={() => {
                  localStorage.clear()
                  setTheme(defaultTheme)
                }}
              >
                Theme zurücksetzen
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
export default UseEffectExerciseScreen2
