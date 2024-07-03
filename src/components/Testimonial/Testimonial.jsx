import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className=" mt-10 lg:mt-24">
      <button className="lg:text-xl  text-[#343268] font-inter font-semibold border border-[#343268] px-3 lg:px-6 py-1 lg:py-3 rounded-xl">
        Testimonial
      </button>

      <h1 className="text-2xl text-[#020043] font-inter font-bold mt-8">
        What they say about us
      </h1>
      {/* Testimonial section  */}
      <div className="flex flex-col lg:flex-row justify-between items-center my-10">
        {/* 1st  Testimonial  */}
        <div className="space-y-4 ">
          <h1 className="text-xl text-[#020043] font-inter font-bold">
            Expertise and Compassion Combined
          </h1>
          <p className="lg:w-[331px] font-inter">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-4">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <h1>
                <span className="font-bold">Sarah D</span>, IT Professional
              </h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd  Testimonial  */}
        <div className="space-y-4 ">
          <h1 className="text-xl text-[#020043] font-inter font-bold">
            Life-Saving Care, Life-Changing Experience
          </h1>
          <p className="lg:w-[331px] font-inter">
            My experience at [Healthcare Provider Name] was life-changing. The
            prompt and accurate diagnosis, coupled with the advanced treatments
            they provided, saved my life.
          </p>
          <div className="flex gap-4">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <h1>
                <span className="font-bold"> Michael R</span>,Business Executive
              </h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
        {/* 3rd  Testimonial  */}
        <div className="space-y-4 ">
          <h1 className="text-xl text-[#020043] font-inter font-bold">
            A Partner in Health and Wellness
          </h1>
          <p className="lg:w-[331px] font-inter">
            As a busy professional, I appreciate the convenience and quality of
            care I receive at [Healthcare Provider Name]. From telemedicine
            consultations to routine check-ups, they've become my trusted
            partner in health and.
          </p>
          <div className="flex gap-4">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <h1>
                <span className="font-bold">David S</span>, Lawyer
              </h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFE03D]"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
