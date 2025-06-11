import React from 'react'

function FormValidation() {
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
    const {name, value} = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    if (validateForm()) {
      console.log('Form submitted', formData);
      window.alert("Alle Werte sind valide");
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
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                data-testid="name-input"
                value={formData.name}
                onChange={handleChange}
            />
            {errors.name && (
                <>
                  <div className="inner-div">{errors.name}</div>
                </>
            )}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                data-testid="message-input"
                value={formData.message}
                onChange={handleChange}
            />
            {errors.message && (
                <>
                  <div className="inner-div">{errors.message}</div>
                </>
            )}
          </div>

          <button type="submit" data-testid="submit-button">Submit</button>
        </form>
      </>
  )
}

export default FormValidation
