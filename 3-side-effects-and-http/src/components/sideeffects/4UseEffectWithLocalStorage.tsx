import { useEffect, useState } from 'react'

import LocalStorageDialog from '../custom/LocalStorageDialog'

function UseEffectWithLocalStorage() {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)

  useEffect(() => {
    const storedName = localStorage.getItem('name')
    const storedAge = localStorage.getItem('age')

    if (storedName) {
      setName(storedName)
    }

    if (storedAge) {
      setAge(parseInt(storedAge))
    }
  }, [])

  return (
    <>
      <h2>useEffect() with LocalStorage</h2>
      <br/>

      <div>Name: {name}</div>
      <div>Age: {age}</div>

      <LocalStorageDialog userState={{name, setName, age, setAge}} />
    </>
  )
}

export default UseEffectWithLocalStorage
