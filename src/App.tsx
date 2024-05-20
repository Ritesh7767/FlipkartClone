import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import RouteLayouts from './Routings/RouteLayouts'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Navbar/>
      <div className='bg-[#F1F2F4]'>
        <RouteLayouts/>
      </div>
    </>
  )
}

export default App
