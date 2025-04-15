import { useState } from 'react'

export function useInput(
  defaultValue: string,
  validationFn: (value: string) => boolean,
) {
  const [value, setValue] = useState(defaultValue)
  const [isTouched, setIsTouched] = useState(false)

  const valueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(event.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setValue(defaultValue)
    setIsTouched(false)
  }

  const isValid = validationFn(value)

  return {
    value,
    isTouched,
    hasError: !isValid && isTouched,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}
