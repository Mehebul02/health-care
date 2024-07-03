import banner from '../../assets/images/Rectangle 5.png'
import bg from '../../assets/images/Group (1).png'
const Banner = () => {
    return (
       <div style={{ backgroundImage: `url(${bg})` }}>
         <div className='my-10' >
            <img className='lg:max-w-[3000px] mx-auto ' src={banner} alt="" />
        </div>
       </div>
    );
};

export default Banner;