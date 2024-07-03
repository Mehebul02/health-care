import { MdArrowOutward } from "react-icons/md";
import appointment from '../../assets/images/Rectangle 27-2.png'
const Appointment = () => {
    return (
        <div>
        <div className="lg:mt-28">
          <div className="flex flex-col lg:flex-row justify-between ">
            <div className=" space-y-5">
              <button className="lg:text-xl  text-[#343268] font-inter font-semibold border border-[#343268] px-3 lg:px-6 py-1 lg:py-3 rounded-xl">
               Service
              </button>
              <h1 className=" text-3xl text-[#343268] font-bold">
              Empowering Health,<br /> Enriching Lives
              </h1>
              <p className="lg:w-[400px] text-[#343268]  font-inter">
              We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
              </p>
              <button className="lg:text-xl  text-[#000000] bg-[#FFC637] font-inter font-semibold border  px-3 lg:px-6 py-1 lg:py-3 rounded-xl flex items-center">
              Appointment <MdArrowOutward />{" "}
              </button>
            </div>
            <div className="relative lg:w-1/2 p-10 ">
              <img className="  lg:w-[500px] mx-auto rounded-lg" src={appointment} alt="" />
              <span className="lg:w-80 px-10 py-6 absolute  lg:bottom-14 left-20 bg-[#3432689f] space-y-4 rounded-xl">
                <h1 className="lg:text-xl text-white font-inter font-semibold">Advanced Technology</h1>
                <p className=" font-inter text-white">
                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Appointment;