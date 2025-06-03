
interface Props {
    themeError: string
}
const ErrorScreen = ({themeError}: Props) => {
  return (
    <div>
      <h2>UseEffect Exercise Screen 2</h2>
      <div>{themeError}</div>
    </div>
  )
}
export default ErrorScreen
