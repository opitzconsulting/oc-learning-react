import React from 'react'

function FormsWOPreventDefault() {
  const [text, setText] = React.useState('')
  const [submittedData, setSubmittedData] = React.useState<{
    name: string
  } | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    setSubmittedData({ name: text })
    console.log('Form submitted')
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value)
  }

  return (
    <>
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
      <div />
      {submittedData && (
        <div>
          <div>Submitted Data:</div>
          <p>Name: {submittedData.name}</p>
        </div>
      )}
    </>
  )
}

export default FormsWOPreventDefault
