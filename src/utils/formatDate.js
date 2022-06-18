import { useState, useEffect } from 'react'

export const formatDate = (data) => {
  const [date, setDate] = useState()

  useEffect(() => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    setDate(data.toLocaleDateString('es-ES', options))
  }, [])

  return date
}
