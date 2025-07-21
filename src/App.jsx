import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./Pages/home/Home"
import About from "./Pages/about/About"
import Footer from "./components/footer/Footer"
import Ticket from "./Pages/ticket/Ticket"


function App() {
  

  return (
    <>
    <Router>
    <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
          {/* Navbar  */}
          <Navbar />

         {/* Routing */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="//bus-tickets" element={<Ticket/>} />
          </Routes>

          {/* Footer */}
          <Footer />
        </main> 
    </Router>
      
    </>
  )
}

export default App
