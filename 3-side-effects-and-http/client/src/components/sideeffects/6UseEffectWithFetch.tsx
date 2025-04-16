import { useEffect, useState } from 'react'
import { getPlaceholderData } from '../../services/PlaceholderFetch';

function UseEffectWithFetch() {
  const [data, setData] = useState<
    { id: number; title: string; body: string }[]
  >([])

  useEffect(() => {
    getPlaceholderData()
      .then((response) => setData(response))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <h2>Fetching Data with useEffect</h2>

      <br />

      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UseEffectWithFetch
