import Topbar from './components/Topbar.jsx'
import Banner from './components/Banner.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Credits from './components/Credits.jsx'
import Footer from './components/Footer.jsx'
import ContactUs from './components/ContactUs.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Topbar />
        <Banner />
        <Navbar />
        <About />
        <Credits />
        <ContactUs />
        <Footer />
      </div>
    </ChakraProvider>
  )
}

export default App
