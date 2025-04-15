import { FormEvent, useRef } from 'react'

function FormsWithUseRef() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const name = nameRef.current?.value || ''
    const email = emailRef.current?.value || ''
    const message = messageRef.current?.value || ''
    console.log('Form submitted', { name, email, message })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" ref={messageRef} />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div />
      <div>
        <h3>Submitted Data:</h3>
        <p>Name: {nameRef.current?.value || 'no value'}</p>
        <p>Email: {emailRef.current?.value || 'no value'}</p>
        <p>Message: {messageRef.current?.value || 'no value'}</p>
      </div>
    </>
  )
}

export default FormsWithUseRef
