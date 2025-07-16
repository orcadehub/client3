import React from 'react';
import logo from './logo.jpeg'; // adjust the path based on your folder structure

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Logo and Name */}
        <div className="mb-6 flex justify-center items-center gap-4 flex-col sm:flex-row">
          <img
            src={logo}
            alt="AccelMinds Logo"
            className="h-20 object-contain rounded-md shadow-sm"
          />
          {/* <span className="text-2xl sm:text-3xl font-bold text-[#1A34F0]">
            AccelMinds Solutions Pvt. Ltd.
          </span> */}
        </div>

        <p className="text-gray-600 mb-4">
          Empowering Campus Recruitment Training with innovation and excellence.
        </p>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} AccelMinds Solutions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
