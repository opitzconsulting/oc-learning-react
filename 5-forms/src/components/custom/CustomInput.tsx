interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  label: string
  placeholder?: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  type?: string
}

function CustomInput(props: Props) {
  const {
    id,
    name,
    label,
    placeholder,
    value,
    onChange,
    error,
    type,
    ...rest
  } = props
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type ? type : 'text'}
        id={id}
        name={name}
        placeholder={placeholder ? placeholder : undefined}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {error && <div className="inner-div">{error}</div>}
    </div>
  )
}
export default CustomInput
