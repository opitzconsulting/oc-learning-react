import React from 'react'

function FormValidationBlur() {
  const [formData, setFormData] = React.useState({
    name: '',
    message: '',
  })

  const [errors, setErrors] = React.useState({
    name: '',
    message: '',
  })

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  function handleOnBlur(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) {
    const { name, value } = event.target
    console.log(name, value)

    // validiere das aktuelle feld und setze den fehlerstatus
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${[name]} is required.`,
      }))
    } else if (value.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Name must be at least 3 characters long.',
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }))
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    if (validateForm()) {
      console.log('Form submitted', formData)
    } else {
      console.log('Form not submitted due to validation errors')
    }
  }

  function validateForm(): boolean {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name) {
      newErrors.name = 'Name is required.'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long.'
    }

    if (!formData.message) {
      newErrors.message = 'Message is required.'
    } else if (formData.message.length < 10) {
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
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {errors.name && (
            <>
              <div className="inner-div">{errors.name}</div>
            </>
          )}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleOnBlur}
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
export default FormValidationBlur
