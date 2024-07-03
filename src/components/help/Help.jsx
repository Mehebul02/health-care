import { MdArrowOutward } from "react-icons/md";

const Help = () => {
    return (
        <div className="lg:mt-28">
            <div className="flex flex-col lg:flex-row justify-between ">
                <div className=" space-y-5">
                <button className="lg:text-xl  text-[#343268] font-inter font-semibold border border-[#343268] px-3 lg:px-6 py-1 lg:py-3 rounded-xl">Who we are</button>
                <h1 className=" text-3xl text-[#343268] font-bold">We Help To Get Soultions</h1>
               <p className="w-[600px]  font-inter">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
               </p>
               <button className="lg:text-xl  text-[#000000] bg-[#FFC637] font-inter font-semibold border  px-3 lg:px-6 py-1 lg:py-3 rounded-xl flex items-center">Learn more <MdArrowOutward/> </button>

                </div>
                <div>
image added
                </div>
            </div>
        </div>
    );
};

export default Help;