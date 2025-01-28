import '../css/About.css'

const About = () => {
  return (
    <div className="about">
      <div>
        <h1>About This App</h1>
        <p>
          Welcome to the Favorite Quotes Explorer! This app allows you to add,
          view, and explore your favorite quotes. It demonstrates the power of
          React and React Router for building dynamic, navigable applications.
        </p>
      </div>
      <div>
        <h2>Technologies Used:</h2>
        <ul>
          <li>React</li>
          <li>React Router DOM</li>
          <li>Vite (for fast development and building)</li>
        </ul>
      </div>
    </div>
  )
}

export default About
