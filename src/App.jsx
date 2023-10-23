import './App.css'
import { Footer, Navbar } from './components/IndexComponents'
import { Home, About, Portfolio, Contact } from './containers/IndexContainers'

function App() {

  return (
    <>
      <section className="container">
        <Navbar />
        <main className="wrapper">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </section>
    </>
  )
}

export default App
