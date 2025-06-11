import React from 'react'

function FormsWithFormData() {
  const [userInputData, setFormData] = React.useState({
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
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    console.log('Form submitted with FormData:')
    formData.forEach((value, key) => console.log(`${key}: ${value}`))
  }

  function handleReset(): void {
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={userInputData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={userInputData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={userInputData.message}
            onChange={handleChange}
          />
        </div>

        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default FormsWithFormData
