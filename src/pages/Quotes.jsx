import { Link } from 'react-router-dom'
import { useState } from 'react'

const Quotes = () => {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      text: 'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
    },
    {
      id: 2,
      text: 'The way to get started is to quit talking and begin doing. - Walt Disney',
    },
  ])
  const [newQuote, setNewQuote] = useState('')

  const addQuote = () => {
    if (newQuote.trim()) {
      const newId = quotes.length + 1
      setQuotes([...quotes, { id: newId, text: newQuote }])
      setNewQuote('')
    }
  }
}

export default Quotes
