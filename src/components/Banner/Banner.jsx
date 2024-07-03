import banner from "../../assets/images/Rectangle 5.png";
import bg from "../../assets/images/Group (1).png";
import group12 from "../../assets/images/Group 12.png";
import video from "../../assets/images/video.png";
import contract from "../../assets/images/contract (1) 1.png";
import gold from "../../assets/images/Group (4).png";
import { FaStar } from "react-icons/fa";
const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="my-10">
        <img className="lg:max-w-[3000px] mx-auto " src={banner} alt="" />
        {/* Comprehensive Care for Every Patient */}
        <div className=" flex flex-col lg:flex-row justify-between gap-10 my-10 ">
          {/* 1s card  */}
          <div className=" ">
            <div className="w-52 bg-slate-100 p-6 rounded-lg space-y-3">
              <h1 className="text-3xl text-[#020043] font-inter font-semibold ">
                90%
              </h1>
              <p className="font-inter">
                Patient satisfaction rate, reflecting our commitment.
              </p>
              <img src={group12} alt="" />
            </div>
          </div>
          {/* 2nd card  */}
          <div className=" mx-auto space-y-9 ">
            <h1 className="text-2xl text-center lg:text-4xl text-[#020043] font-inter font-bold">
              Comprehensive Care <br /> for Every Patient
            </h1>
            <div className="flex flex-col lg:flex-row gap-6  space-x-10">
              {/* 500+ */}
              <div className="p-6 h-48 bg-slate-100  rounded-lg space-y-2">
                <h1 className="text-3xl text-[#020043] font-inter font-semibold ">
                  500+
                </h1>
                <p className="font-inter">
                  Board-certified <br />
                  doctors
                </p>
                <img className="w-10" src={contract} alt="" />
              </div>
              {/* 500+ */}
              <div className="p-6 h-48 bg-slate-100  rounded-lg space-y-2">
                <h1 className="text-3xl text-[#020043] font-inter font-semibold flex gap-2">
                  4.8{" "}
                  <span>
                    <FaStar className="text-yellow-500" />
                  </span>
                </h1>
                <p className="font-inter">Over 20,000 <br />Patient</p>
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              {/* 500+ */}
              <div className="p-6 h-48 bg-slate-100  rounded-lg space-y-2">
                <h1 className="text-3xl text-[#020043] font-inter font-semibold ">
                  $5000
                </h1>
                <p className=" font-inter">
                Money spend <br />
               for poor patient
                </p>
                <img className="w-10" src={gold} alt="" />
              </div>
            </div>
          </div>
          {/* 3rd card  */}
          <div className=" mx-auto">
            <div className="w-52 bg-slate-100 p-6 rounded-lg space-y-3">
              <h1 className="text-3xl text-[#020043] font-inter font-semibold ">
                50+
              </h1>
              <p className="font-inter">
                Patient satisfaction rate, reflecting our commitment.
              </p>
              <img className="" src={video} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
