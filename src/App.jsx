
import './App.css'
import Appointment from './components/Appointment/Appointment'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import HelpSection from './components/helpsection/HelpSection'
import OnlineDoctor from './components/onlineDoctor/OnlineDoctor'


function App() {
 
  return (
    <>
    <div className=''>
    <Navbar/>
    <Banner/>
   <HelpSection/>
   <Appointment/>
   <OnlineDoctor/>
    </div>
    </>
  )
}

export default App
