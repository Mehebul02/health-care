import banner from '../../assets/images/Rectangle 5.png'
import bg from '../../assets/images/Group (1).png'
import group12 from '../../assets/images/Group 12.png'
import video from '../../assets/images/video.png'
const Banner = () => {
    return (
       <div style={{ backgroundImage: `url(${bg})` }}>
         <div className='my-10' >
            <img className='lg:max-w-[3000px] mx-auto ' src={banner} alt="" />
            {/* Comprehensive Care for Every Patient */}
            <div className='flex justify-between  my-10 '>
                {/* 1s card  */}
                <div className=' '>
                    <div className='w-52 bg-slate-100 p-6 rounded-lg space-y-3'>
                        <h1 className='text-3xl text-[#020043] font-inter font-semibold '>90%</h1>
                        <p>Patient satisfaction rate, reflecting our commitment.</p>
                        <img src={group12} alt="" />
                    </div>
                </div>
                {/* 2nd card  */}
                <div className='w-1/2 mx-auto'>
                   <h1 className='text-4xl text-[#020043] font-inter font-bold'>Comprehensive Care <br /> for Every Patient</h1>
               vdvgdfsgvdf sdfgsdfgvsdgvd
                </div>
                {/* 3rd card  */}
                <div className=' mx-auto'>
                <div className='w-52 bg-slate-100 p-6 rounded-lg space-y-3'>
                        <h1 className='text-3xl text-[#020043] font-inter font-semibold '>50+</h1>
                        <p>Patient satisfaction rate, reflecting our commitment.</p>
                        <img src={video} alt="" />
                    </div>
                </div>

            </div>
        </div>
       </div>
    );
};

export default Banner;