import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Quotes from './pages/Quotes'
import QuoteDetails from './pages/QuoteDetails'
import About from './pages/About'

const App = () => {
  return (
    <div className="components">
      <nav className="navbar-components">
        <Link className='a-links' to="/">Home</Link>
        <Link className='a-links' to="/quotes">Quotes</Link>
        <Link className='a-links' to="/about">About</Link>
      </nav>

      {/* Routes configuration */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:id" element={<QuoteDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
