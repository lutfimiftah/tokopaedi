import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
  <h1 className="text-center font-extrabold text-green-500 text-5xl m-5">
    tokopaedi
  </h1>
  <div className="container flex my-10">
    <div className="mx-auto">
      <img
        src="src/img/logo/register_icon_new.png"
        alt="ikonTokopedia"
        style={{ height: 400, width: 500 }}
      />
      <p className="font-semibold text-2xl text-center">
        Discover Millions of Trusted Shops
      </p>
      <p className="text-sm my-1 text-center">
        Join and enjoy the best online shopping experience
      </p>
    </div>
    <div className="w-auto h-auto shadow-xl rounded-lg m-5 text-center">
      <div className="font-bold text-2xl text-black text-center m-2">
        Sign Up Now
      </div>
      <p className="text-base font-medium m-2">
        Already have a Tokopedia account?{" "}
        <a href="#" className="text-green-500" onClick={() => navigate("/")}>
          Login
        </a>
      </p>
      <button className="flex items-center justify-center gap-2 font-bold text-lg w-96 mx-10 h-14 border-slate-400 border rounded-lg m-2 active:bg-slate-200 active:border-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height:20, width:20}} id="google">
  <path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
  <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
  <path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
  <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
</svg>
        Google
      </button>
      <div className="relative mb-4 text-center">
        <span className="text-base">or</span>
        <span className="before:content-[''] before:mx-5 before:absolute before:w-[30%] before:h-px before:bg-slate-400 before:top-1/2 before:left-5 after:content-[''] after:mx-4 after:absolute after:w-[30%] after:h-px after:bg-slate-400 after:top-1/2 after:right-4" />
      </div>
      <input
        type="text"
        placeholder="Phone Number or E-mail"
        className="w-96 mx-10 h-14 border-slate-400 border rounded-lg m-2 focus:outline-none focus:ring-1 focus:ring-green-500"
      />
      <p className="text-left left-10 relative text-sm">
        Example: email@tokopaedi.com
      </p>
      <button className="w-96 h-14 rounded-lg m-4 font-semibold text-slate-400 bg-slate-300">
        Register
      </button>
      <div className="m-4">
        <p className="text-sm">By registering, I agree to</p>
        <a href="#" className="font-semibold text-green-500">
          Terms and Conditions
        </a>
        <span className="text-sm"> with </span>
        <a href="#" className="text-sm font-semibold text-green-500">
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
  <div className="mt-40 text-center">
    <p className="text-sm text-slate-500">
      ©2024-2050, PT Tokopaedi <span className="text-slate-200">|</span>{" "}
      <a href="#" className="font-bold text-green-500">
        Tokopaedi Care
      </a>
    </p>
  </div>
</>

  )
}

export default Register