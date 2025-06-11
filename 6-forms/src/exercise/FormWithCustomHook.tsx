import React, {  } from 'react'
import { useInput } from './useInput'
import { validateName, validateMessage } from './validation'
import { useNavigate } from 'react-router-dom'

function FormWithCustomHook() {
  const nameInput = useInput('', validateName)
  const messageInput = useInput('', validateMessage)
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    nameInput.onBlur()
    messageInput.onBlur()

    if (nameInput.errors.length === 0 && messageInput.errors.length === 0) {
      navigate('/thx', { state: { name: nameInput.value } })
      nameInput.reset()
      messageInput.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={nameInput.value}
          onChange={nameInput.onChange}
          onBlur={nameInput.onBlur}
        />
        {nameInput.touched &&
          nameInput.errors.map((err, i) => (
            <div key={i} style={{ color: 'red' }}>
              {err}
            </div>
          ))}
      </div>
      <div>
        <label htmlFor="message">Nachricht:</label>
        <textarea
          id="message"
          value={messageInput.value}
          onChange={messageInput.onChange}
          onBlur={messageInput.onBlur}
        />
        {messageInput.touched &&
          messageInput.errors.map((err, i) => (
            <div key={i} style={{ color: 'red' }}>
              {err}
            </div>
          ))}
      </div>
      <button type="submit">Absenden</button>
    </form>
  )
}

export default FormWithCustomHook
