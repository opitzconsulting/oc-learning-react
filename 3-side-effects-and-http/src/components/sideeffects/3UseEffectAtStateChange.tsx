'use client'

import { Label } from '@radix-ui/react-label'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'

function UseEffectAtStateChange() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<string[]>([])

  // 3. Läuft nur wenn sich searchTerm ändert
  useEffect(() => {
    console.log('Suchbegriff:', searchTerm)

    setResults(
      randomStringArray().filter((result) => result.includes(searchTerm)),
    )

  }, [searchTerm])

  function randomStringArray(): string[] {
    return [
      'Lorem ipsum',
      'dolor sit amet',
      'consectetur',
      'adipiscing elit',
      'sed do eiusmod',
      'tempor incididunt',
      'ut labore et',
      'dolore magna',
      'aliqua',
      'ut enim ad',
      'minim veniam',
    ]
  }

  return (
    <>
      <h2>useEffect at State Change</h2>
      <br />

      <Label>
        Suchbegriff:
        <Input
          type="text"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
      </Label>

      <br />
      <br />

      {searchTerm && <div>Ihre Suche zu {searchTerm}:</div>}

      {results && (
        <div>
          {results.map((result, i) => (
            <div key={i}>{result}</div>
          ))}
        </div>
      )}
    </>
  )
}

export default UseEffectAtStateChange
