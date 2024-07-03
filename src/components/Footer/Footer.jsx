import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/images/logo light.png'
const Footer = () => {
    return (
        <footer className="footer bg-[#020043] text-base-content p-10">
  <aside>
    <img src={logo} alt="" />
    <p className='text-white'>
    Postal Code: 12345
      <br />
      Providing reliable tech since 1992
    </p>
    <p className='text-white'>
    Support: support@oyolloo.com <br />
    (Available : 10:00am to 07:00pm)
    </p>
  </aside>
  <nav>
   
    <a className="link link-hover text-[#FFFFF5]">Home</a>
    <a className="link link-hover text-[#FFFFF5]">About Us </a>
    <a className="link link-hover text-[#FFFFF5]">Success Page</a>
    <a className="link link-hover text-[#FFFFF5]">Terms and condition</a>
  </nav>
  <nav>
  



 
<a className="link link-hover text-[#FFFFF5]">Services</a>
<a className="link link-hover text-[#FFFFF5]">Scheduling</a>
<a className="link link-hover text-[#FFFFF5]">Contact Us</a>
<a className="link link-hover text-[#FFFFF5]">Patient Portal</a>

    
  </nav>
  <nav>
    <h6 className="text-xl font-inter text-white">Follow Us</h6>
    <div className='flex space-x-9'>
<a > <FaFacebook className='text-white'/></a>
<a > <FaInstagram className='text-white'/></a>
<a > <FaLinkedin className='text-white'/></a>
<a > <FaYoutube className='text-white'/></a>
    </div>
    <h1 className='text-xl text-white my-10'>@docplus 2024</h1>
  </nav>
</footer>
    );
};

export default Footer;