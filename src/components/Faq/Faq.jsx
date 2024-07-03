import Accordion from "./Accordion";
import bg from '../../assets/images/Rectangle 32.png'
import logo from '../../assets/images/logo light.png'
import { MdArrowOutward } from "react-icons/md";
const Faq = () => {
  return (
    <div className="lg:my-24">
      <button className="lg:text-xl  text-[#343268] font-inter font-semibold border border-[#343268] px-3 lg:px-6 py-1 lg:py-3 rounded-xl">
        Faq
      </button>
      <h1 className="text-3xl text-[#020043] font-inter font-bold mt-10">
        Frequntly Asked Question
      </h1>
      <div className="mt-10">
        <h1 className=" text-[#020043] font-semibold font-inter">
          {" "}
          What are your office hours?
        </h1>
        <div className="divider"></div>
        <p className="font-inter ">
          Our office hours vary by location, but typically we are open Monday
          through Friday from 8:00 AM to 5:00 PM. Some locations may offer
          extended hours or weekend appointments. Please contact your nearest
          clinic for specific hours.
        </p>
        {/* Accordion */}
        <Accordion />
      </div>
      {/* bg img  */}
      <div className="p-10 flex bg-gradient-to-r from-cyan-500 to-blue-500 flex-col lg:flex-row justify-between  gap-4 my-10" style={{ backgroundImage: `url(${bg})`,backgroundRepeat: 'no-repeat',borderRadius:'10px',  backgroundSize: 'cover',   width:'100%', height:'60vh'}}>
       <div className="space-y-6" >
        <h1 className=" text-4xl text-[#020043] font-bold ">Get Your <br />
First Appointment <br />
at 50% Off!</h1>
<div className="flex gap-4">
<button className="lg:text-xl  text-[#000000] bg-[#FFC637] font-inter font-semibold border  px-3 lg:px-6 py-1 lg:py-3 rounded-xl flex items-center">
              Appointment <MdArrowOutward />{" "}
              </button>
<button className="lg:text-xl  text-[#343268] font-inter font-semibold border border-[#343268] px-3 lg:px-6 py-1 lg:py-3 rounded-xl flex items-center">Learn More <MdArrowOutward /> </button>

</div>
       </div>
       <div>
        <img src={logo} alt="" />
       </div>

      </div>
    </div>
  );
};

export default Faq;
