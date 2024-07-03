
import './App.css'
import Appointment from './components/Appointment/Appointment'
import Banner from './components/Banner/Banner'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Testimonial from './components/Testimonial/Testimonial'
import HelpSection from './components/helpsection/HelpSection'
import OnlineDoctor from './components/onlineDoctor/OnlineDoctor'


function App() {
 
  return (
    <>
    <div className='max-w-[1300px] mx-auto'>
    <Navbar/>
    <Banner/>
   <HelpSection/>
   <Appointment/>
   <OnlineDoctor/>
   <Testimonial/>
   <Faq/>
    </div>
   <Footer/>
    </>
  )
}

export default App
