
import './App.css'
import Appointment from './components/Appointment/Appointment'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import HelpSection from './components/helpsection/HelpSection'


function App() {
 
  return (
    <>
    <div className=''>
    <Navbar/>
    <Banner/>
   <HelpSection/>
   <Appointment/>
    </div>
    </>
  )
}

export default App
