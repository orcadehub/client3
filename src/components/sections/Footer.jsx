import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-3xl font-bold text-red-600">
            AccelMinds Solutions Pvt. Ltd.
          </span>
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