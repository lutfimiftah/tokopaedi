import React from 'react';
import closeIcon from '../assets/close-svgrepo-com.svg';
import qrCodeIcon from '../assets/qr-code-scan-svgrepo-com.svg';

const login = () => {
  return (
    <div className="z-[9999] w-[350px] shadow-xl rounded-[10px] p-4 bg-white">
    <div className="flex justify-end">
      <button className="border-none bg-none text-2xl cursor-pointer">
        <img className='w-8' src={closeIcon} alt="close" />
      </button>
    </div>
    <p className="mt-8 mb-2 text-left font-sans text-3xl font-bold">Login</p>
    <a href="#" className="mb-4 block text-right font-semibold text-green-600">Sign Up</a>
    <div>
      <form className="mb-4">
        <p>Phone Number Or Email</p>
        <input className='border focus:outline-none  focus:ring-1 focus:ring-green-400 w-full h-10 rounded-md' type="text" />
      </form>
      <a href="#" className="block mb-4 text-right font-semibold text-green-600">Need Help?</a>
      <div>
        <button className="block mb-4 w-full bg-slate-300 rounded-lg h-10 text-slate-100 font-semibold">Next</button>
      </div>
      <div className="relative mb-4 text-center">
        <span className='text-slate-400'>or login with</span>
        <span className="before:content-[''] before:absolute before:w-[30%] before:h-px before:bg-slate-400 before:top-1/2 before:left-0 after:content-[''] after:absolute after:w-[30%] after:h-px after:bg-slate-400 after:top-1/2 after:right-0"></span>
      </div>
      <div>
        <button className="flex items-center justify-center gap-2 mb-2.5 w-full border rounded-lg h-10 font-semibold text-slate-400"><img src={qrCodeIcon} alt="qr" />Scan Kode QR
        </button>
        <button className=" w-full border rounded-lg h-10 font-semibold">Other Methods</button>
      </div>
    </div>
  </div>
  
  );
};

export default login;
