import React from 'react'
import CustomInput from '../custom/CustomInput'
import { hasMinLength, isDefined } from '../util/validation'

function FormCustomInputField() {
  const [formData, setFormData] = React.useState({
    name: '',
    message: '',
  })

  const [errors, setErrors] = React.useState({
    name: '',
    message: '',
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    if (validateForm()) {
      console.log('Form submitted', formData)
    } else {
      console.log('Form not submitted due to validation errors')
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  function validateForm(): boolean {
    const newErrors: { [key: string]: string } = {}

    if (isDefined(formData.name)) {
      newErrors.name = 'Name is required.'
    } else if (hasMinLength(formData.name, 3)) {
      newErrors.name = 'Name must be at least 3 characters long.'
    }

    if (isDefined(formData.message)) {
      newErrors.message = 'Message is required.'
    } else if (hasMinLength(formData.message, 10)) {
      newErrors.message = 'Message must be at least 10 characters long.'
    }

    setErrors({
      name: newErrors.name || '',
      message: newErrors.message || '',
    })
    return Object.keys(newErrors).length === 0 // Formular ist gültig, wenn es keine Fehler gibt
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <>
              <div className="inner-div">{errors.name}</div>
            </>
          )}
        </div>

        <CustomInput
          id={'name'}
          name={'name'}
          label={'Name:'}
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <>
              <div className="inner-div">{errors.message}</div>
            </>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default FormCustomInputField
