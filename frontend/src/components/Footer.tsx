import { Link } from 'react-router-dom';
import FooterLogo from '../assets/qucikbite logo.png';

const Footer = () => {
  return (
    <div className="bg-gray-200 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className='flex-1'>
           <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
            <img src={FooterLogo} alt="navlogo" className="w-36 md:w-40"/>
            </Link>
            <p className='mt-4 text-gray-800 text-sm sm:text-base'>QuickBite — Your go-to destination for fast, fresh, and flavorful meals. Whether you're at home, work, or on the go, we bring your favorite dishes straight to your doorstep—quick, easy, and always delicious.</p>
            </div>
            {/* <span className="text-3xl text-white font-bold tracking-tight">
                MernEats.com
            </span> */}
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </span>
        </div>
    </div>
  )
}

export default Footer