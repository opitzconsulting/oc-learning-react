import { Theme } from '../../services/ThemeFetch'

interface Props {
  theme: Theme
}

const themeBoxStyle = {
    box: {
        borderRadius: '8px',
        border: '1px solid #ccc',
        paddingTop: '10px',
        paddingBottom: '10px',
      },

}
const ThemeBox = ({ theme }: Props) => {

    const handleSelectTheme = () => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }
  return (
    <div style={{
        ...themeBoxStyle.box,
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
    }}>
      <strong>{theme.name}</strong>
      <p>
        Hintergrundfarbe:
        <span style={{ backgroundColor: theme.colors.background }}>
          {theme.colors.background}
        </span>
      </p>
      <p>
        Textfarbe:
        <span style={{ color: theme.colors.text }}>{theme.colors.text}</span>
      </p>
      <p>
        Primärfarbe:
        <span style={{ backgroundColor: theme.colors.primary }}>
          {theme.colors.primary}
        </span>
      </p>
      <p>
        Sekundärfarbe:
        <span style={{ backgroundColor: theme.colors.secondary }}>
          {theme.colors.secondary}
        </span>
      </p>
      <br/>
      <button onClick={handleSelectTheme} style={{color: theme.colors.primary}}>Auswählen</button>
    </div>
  )
}

export default ThemeBox
