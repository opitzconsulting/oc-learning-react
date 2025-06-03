import React from 'react'

function FormsWPrevent() {
  const [text, setText] = React.useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    console.log('Form submitted')
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormsWPrevent
