import Accordion from "./Accordion";

const Faq = () => {
    return (
        <div className="lg:my-24">
             <button className="lg:text-xl  text-[#343268] font-inter font-semibold border border-[#343268] px-3 lg:px-6 py-1 lg:py-3 rounded-xl">
        Faq
      </button>
      <h1 className="text-3xl text-[#020043] font-inter font-bold mt-10">Frequntly Asked Question</h1>
        <div className="mt-10">
            <h1 className=" text-[#020043] font-semibold font-inter"> What are your office hours?</h1>
        <div className="divider"></div>
        <p className="font-inter ">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
        {/* Accordion */}
        <Accordion/>
        
        </div>


        </div>
    );
};

export default Faq;