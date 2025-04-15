interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  name: string
  label: string
  placeholder?: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
}

function CustomTextarea(props: Props) {
  const { id, name, label, placeholder, value, onChange, error, ...rest } =
    props

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
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

export default CustomTextarea
