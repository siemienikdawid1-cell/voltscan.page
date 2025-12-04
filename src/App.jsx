import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Brands from './sections/Brands'
import Realizations from './sections/Realizations'
import Contact from './sections/Contact'
import RepairForm from './sections/RepairForm'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Brands />
      <Realizations />
      <RepairForm />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
