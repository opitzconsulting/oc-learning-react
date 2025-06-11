import React from 'react'
import CustomInput from '../custom/CustomInput'
import { hasMinLength, isDefined } from '../util/validation'
import { useInput } from '../hooks/UseInput'
import CustomTextarea from '../custom/CustomTextarea'

function FormWithUseInputHook() {
  const {
    value: nameValue, //Wert 'value' aus dem Hook wird hier als 'nameValue' bezeichnet und in der Variable gespeichert
    inputBlurHandler: handleNameBlur,
    valueChangeHandler: handleNameChange,
    hasError: hasNameError,
  } = useInput(
    '',
    (value: string) => isDefined(value) && hasMinLength(value, 3),
  )

  const {
    value: messageValue,
    inputBlurHandler: handleMessageBlur,
    valueChangeHandler: handleMessageChange,
    hasError: hasMessageError,
  } = useInput(
    '',
    (value: string) => isDefined(value) && hasMinLength(value, 10),
  )

  const [errors, setErrors] = React.useState({
    name: '',
    message: '',
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
  event.preventDefault()

  setErrors({
    name: hasNameError ? 'Invalid Name' : '',
    message: hasMessageError ? 'Invalid Message' : '',
  })

  // Wenn es Fehler gibt, wird die Funktion abgebrochen
  if (hasNameError || hasMessageError) {
    return
  }

  console.log('submitted', { name: nameValue, message: messageValue })
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomInput
          id={'name'}
          name={'name'}
          label={'Name:'}
          value={nameValue}
          onBlur={handleNameBlur}
          onChange={handleNameChange}
          error={errors.name}
        />

        <CustomTextarea
          id="message"
          name="message"
          label="Message:"
          value={messageValue}
          onChange={handleMessageChange}
          onBlur={handleMessageBlur}
          error={errors.message}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default FormWithUseInputHook
