import { MdArrowOutward } from "react-icons/md";
import doctorImg from "../../assets/images/Rectangle 24.png";
const HelpSection = () => {
  return (
    <div>
      <div className="lg:mt-28">
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className=" space-y-5">
            <button className="lg:text-xl  text-[#343268] font-inter font-semibold border border-[#343268] px-3 lg:px-6 py-1 lg:py-3 rounded-xl">
              Who we are
            </button>
            <h1 className=" text-3xl text-[#343268] font-bold">
              We Help To Get Soultions
            </h1>
            <p className="lg:w-[600px] text-[#343268]  font-inter">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each patient with dignity, respect, and
              empathy, ensuring that they receive the attention and care they
              deserve.
            </p>
            <button className="lg:text-xl  text-[#000000] bg-[#FFC637] font-inter font-semibold border  px-3 lg:px-6 py-1 lg:py-3 rounded-xl flex items-center">
              Learn more <MdArrowOutward />{" "}
            </button>
          </div>
          <div className="relative lg:w-1/2 p-10 ">
            <img className="  lg:w-[500px] mx-auto" src={doctorImg} alt="" />
            <span className="lg:w-80 px-10 py-6 absolute  lg:bottom-0 bg-[#343268] space-y-4 rounded-xl">
              <h1 className="lg:text-2xl text-white font-inter font-semibold">Our mission is simple</h1>
              <p className="font-inter text-white">
                To provide high-quality healthcare services that are accessible,
                personalized, and patient-centered.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
