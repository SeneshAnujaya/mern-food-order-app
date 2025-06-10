import { Link } from "react-router-dom";
import FooterLogo from "../assets/qucikbite logo.png";
import { Mail, PhoneCall } from "lucide-react";
import appDownImage from "../assets/app-download-img.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between  gap-8 flex-wrap">
          <div className="flex-1">
            <Link
              to="/"
              className="text-3xl font-bold tracking-tight text-orange-500"
            >
              <img src={FooterLogo} alt="navlogo" className="w-36 md:w-40" />
            </Link>
            <p className="mt-4 text-gray-800 text-sm sm:text-[0.9rem]">
              QuickBite — Your go-to destination for fast, fresh, and flavorful
              meals. Whether you're at home, work, or on the go, we bring your
              favorite dishes to your doorstep.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="font-outfit text-sm sm:text-[1.08rem] font-semibold text-gray-900">
              Quick Links
            </h3>
            <ul className="mt-6 text-sm sm:text-[0.9rem] font-medium text-gray-700 leading-[1.8]">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="font-outfit text-sm sm:text-[1.08rem] font-semibold text-gray-900">
              My Account
            </h3>
            <ul className="mt-6 text-sm sm:text-[0.9rem] font-medium text-gray-700 leading-[1.8]">
              <li>My Profile</li>
              <li>My Orders</li>
              <li>My Restaurants</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="font-outfit text-sm sm:text-[1.08rem] font-semibold text-gray-900">
              Contact Us
            </h3>
            <ul className="mt-6 text-sm sm:text-[0.9rem] font-medium text-gray-700 leading-[1.8]">
              <li className="mb-2">
                <div className="flex items-center gap-2">
                  <span>
                    <Mail className="w-5 h-5 text-mainOrange" />
                  </span>
                  <span className="font-medium">Info.QuickBite@mail.com</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>
                    <PhoneCall className="w-5 h-5 text-mainOrange" />
                  </span>
                  <span className="font-medium">+94 77 9864783</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="font-outfit text-sm sm:text-[1.08rem] font-semibold text-gray-900">
              Our App
            </h3>
            <p className="my-6 text-sm sm:text-[0.9rem]">
              Get our app from app store or Google playstore
            </p>
            <div>
              <img src={appDownImage} className="w-48" />
            </div>
          </div>
          
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-950 py-4">
        <p className="text-slate-200 text-sm font-outfit font-light">© Copyright 2025 QuickBite . All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
