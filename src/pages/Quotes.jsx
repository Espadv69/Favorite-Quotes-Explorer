import { Link } from 'react-router-dom'
import { useState } from 'react'

import '../css/Quotes.css'

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

  return (
    <div className="quotes">
      <h1>Favorite Quotes</h1>

      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <Link className='a-links' to={`/quotes/${quote.id}`}>{quote.text}</Link>
          </li>
        ))}
      </ul>

      <div>
        <h2>Add a New Quote</h2>
        <textarea
          id="quoteInput"
          value={newQuote}
          onChange={(e) => setNewQuote(e.target.value)}
          placeholder="Type your quote here..."
        />
        <button onClick={addQuote}>Add Quote</button>
      </div>
    </div>
  )
}

export default Quotes
