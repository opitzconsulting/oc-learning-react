import React from 'react'

function FormRequiredValidation() {
  const [formData, setFormData] = React.useState({
    name: '',
    message: '',
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    console.log('Form submitted', formData)
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default FormRequiredValidation
