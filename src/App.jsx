import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

const Home = lazy(() => import("./Pages/home/Home"))
const About = lazy(() => import("./Pages/about/About"))
const Ticket = lazy(() => import("./Pages/ticket/Ticket"))


function App() {
  

  return (
    <>
    <Router basename={import.meta.env.BASE_URL}>
    <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
          {/* Navbar  */}
          <Navbar />

         {/* Routing */}
          <Suspense fallback={<div className="w-full py-8 text-center text-neutral-500">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/bus-tickets" element={<Ticket/>} />
          </Routes>
          </Suspense>

          {/* Footer */}
          <Footer />
        </main> 
    </Router>
      
    </>
  )
}

export default App
