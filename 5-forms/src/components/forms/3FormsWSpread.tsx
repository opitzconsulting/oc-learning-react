import React from 'react'

function FormsWSpread() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
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

    // Fehler für das aktuelle Feld zurücksetzen
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
    }

    setErrors({
      name: newErrors.name || '',
      email: newErrors.email || '',
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

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <>
              <div className="inner-div">{errors.email}</div>
            </>
          )}
        </div>

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

export default FormsWSpread
