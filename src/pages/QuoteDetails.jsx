import { useParams } from 'react-router-dom'

const QuoteDetails = () => {
  const { id } = useParams()

  // todo: replace with dynamic data
  const quotes = [
    {
      id: 1,
      text: 'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
    },
    {
      id: 2,
      text: 'The way to get started is to quit talking and begin doing. - Walt Disney',
    },
  ]
  const quote = quotes.find((q) => q.id === Number(id))

  if (!quote) {
    return <h1>Quote not found</h1>
  }

  return (
    <div>
      <h1>Quote Details</h1>
      <p>{quote.text}</p>
      <p>
        <em>Quote ID: {quote.id}</em>
      </p>
    </div>
  )
}

export default QuoteDetails
