
import { MdArrowOutward } from 'react-icons/md';
import Img1st from '../../assets/images/Rectangle 27-1.png'
import Img2nd from '../../assets/images/Rectangle 27.png'
const OnlineDoctor = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            {/* 1st image  */}
             <div className="relative lg:w-1/2 p-10 ">
              <img className="  lg:w-[500px] mx-auto rounded-lg" src={Img1st} alt="" />
              <span className="lg:w-80 px-10 py-6 absolute  lg:bottom-14 left-20 bg-[#3432689f] space-y-4 rounded-xl">
                <h1 className="lg:text-xl text-white font-inter font-semibold">Online Doctor Meet</h1>
                <div className='flex justify-between items-end'>
                <p className=" font-inter text-white">
                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.
                </p>
               <span className=''> <MdArrowOutward  className=' bg-[#FFC637] w-10 h-10 rounded-full text-white p-2 '/></span>
                </div>
              </span>
            </div>
            {/* 1st image  */}
             <div className="relative lg:w-1/2 p-10 ">
              <img className="  lg:w-[500px] mx-auto rounded-lg" src={Img2nd} alt="" />
              <span className="lg:w-80 px-10 py-6 absolute  lg:bottom-14 left-20 bg-[#3432689f] space-y-4 rounded-xl">
                <h1 className="lg:text-xl text-white font-inter font-semibold">Consultancy your health</h1>
                <div className='flex justify-between items-end'>
                <p className=" font-inter text-white">
                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                </p>
               <span className=''> <MdArrowOutward  className=' bg-[#FFC637] w-10 h-10 rounded-full text-white p-2 '/></span>
                </div>
              </span>
            </div>
        </div>
    );
};

export default OnlineDoctor;