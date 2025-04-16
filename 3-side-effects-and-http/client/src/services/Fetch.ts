/* eslint-disable @typescript-eslint/no-explicit-any */

// Basisfunktion für HTTP-Requests
const httpRequest = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json() // Annahme: Die Antwort ist JSON
  } catch (error) {
    console.error('Fetch error:', error)
    throw error // Fehler weiterwerfen, damit der Aufrufer damit umgehen kann
  }
}

export const get = (url: string): Promise<any> => {
    return httpRequest(url, {
      method: 'GET',
    });
  };

export const post = (url: string, body: any): Promise<any> => {
  return httpRequest(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export const put = (url: string, body: any): Promise<any> => {
  return httpRequest(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export const del = (url: string): Promise<any> => {
  return httpRequest(url, {
    method: 'DELETE',
  })
}
