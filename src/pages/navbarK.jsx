jsx
import React from 'react';

const NavbarK = () => {
  return (
    <header
    id="navbar"
    className="flex flex-wrap border sticky top-0 z-50 bg-white"
  >
    <div className="flex items-center justify-between w-full px-4">
      <div className="flex items-center justify-start">
        <a
          href="#"
          className="text-4xl font-semibold block py-6 text-green-500"
        >
          tokopaedi
        </a>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="text-base">Categori</div>
        <div className="border border-green-500 rounded-lg bg-white h-10 flex items-center ml-4 w-1/2">
          <form className="flex w-full">
            <button type="submit" className="m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={20}
                height={20}
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="outline-none w-full rounded-lg"
            />
          </form>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button className="border border-green-500 w-20 h-10 rounded-lg text-green-500 font-semibold">
          Login
        </button>
        <button className="bg-green-500 rounded-lg w-20 h-10 text-white font-semibold ml-2">
          Register
        </button>
      </div>
    </div>
    {/* added new text */}
    <div className="w-full flex justify-center">
      <p className="text-sm text-slate-400 px-1 hover:text-green-600 cursor-pointer">
        Samsung Note 10
      </p>
      <p className="text-sm text-slate-400 px-1 hover:text-green-600 cursor-pointer">
        Charger Mobil
      </p>
      <p className="text-sm text-slate-400 px-1 hover:text-green-600 cursor-pointer">
        Samsung A73
      </p>
      <p className="text-sm text-slate-400 px-1 hover:text-green-600 cursor-pointer">
        Pull Up Bar
      </p>
      <p className="text-sm text-slate-400 px-1 hover:text-green-600 cursor-pointer">
        HDD 1tb
      </p>
      <p className="text-sm text-slate-400 px-1 hover:text-green-600 cursor-pointer">
        XBOX series X
      </p>
    </div>
    {/* grid button */}
    <div
      id="gridButton"
      className="container grid grid-cols-5 gap-4 z-50 py-2 bg-white"
    >
      <button className="h-14 p-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg text-white font-semibold">
        perawatan Masak
      </button>
      <button className="h-14 p-2 bg-gradient-to-r from-green-500 to-green-400 rounded-lg text-white font-semibold">
        Minuman
      </button>
      <button className="h-14 p-2 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg text-white font-semibold">
        Baju Tidur pria
      </button>
      <button className="h-14 p-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg text-white font-semibold">
        Mirip Yang Kamu Cari
      </button>
    </div>
    {/* grid button end */}
  </header>
  );
};

export default NavbarK;

