import React, { useState, useEffect } from 'react';
import Promo, { promoImages } from "./Promo";
import Category, { categoryImages } from "./Category";
import NavbarK from "./NavbarK";
import login from './login';


const Home = () => {
  const [promoIndex, setPromoIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [showOriginalNavbar, setShowOriginalNavbar] = useState(true);
  const [showNavbarK, setShowNavbarK] = useState(false);

 

  const showNextCategory = () => {
    setCategoryIndex((prevIndex) => (prevIndex + 1) % categoryImages.length);
  };

  const showPrevCategory = () => {
    setCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categoryImages.length) % categoryImages.length
    );
  };

  const visibleCategoryImages = categoryImages
    .slice(categoryIndex, categoryIndex + 4)
    .concat(
      categoryImages.slice(
        0,
        Math.max(0, categoryIndex + 4 - categoryImages.length)
      )
    );

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const gridButton = document.getElementById("gridButton");
      const menuKebutuhan = document.getElementById("menuKebutuhan");
      const footer = document.getElementById("footer");

      const scrollY = window.scrollY;

      // Position for menuKebutuhan
      const menuKebutuhanTop = menuKebutuhan.offsetTop;
      const footerTop = footer.offsetTop;

      // Show NavbarK and hide original navbar
      if (scrollY >= menuKebutuhanTop && scrollY < footerTop) {
        setShowOriginalNavbar(false);
        setShowNavbarK(true);
      } 
      // Show original navbar when scrolling back up
      else if (scrollY < menuKebutuhanTop) {
        setShowOriginalNavbar(true);
        setShowNavbarK(false);
      } 
      // Hide NavbarK at footer
      else if (scrollY >= footerTop) {
        setShowNavbarK(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
  {/* navbar start */}
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
    <div className="w-full flex justify-center py-1">
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
  </header>
  {/* navbar end */}

    {/* NavbarK */}
    {showNavbarK && <NavbarK />}
    {/* categori */}
    {/* <Category
        visibleCategoryImages={visibleCategoryImages}
        showPrevCategory={showPrevCategory}
        showNextCategory={showNextCategory}
      />
     */}
      {/* promo start */}
      <section className="pt-5">
        <div className="container">
          <div className="relative flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${promoIndex * 100}%)` }}
              id="slider"
            >
              {promoImages.map((src, i) => (
                <div key={i} className="w-full rounded-lg shadow-lg flex-shrink-0">
                  <img src={src} alt={`promo${i + 1}`} className="rounded-lg" />
                </div>
              ))}
            </div>
            <button
              id="prev"
              className="absolute inset-y-0 left-0 flex items-center justify-center p-2 rounded-full opacity-50"
              onClick={() => setPromoIndex((prevIndex) => (prevIndex - 1 + promoImages.length) % promoImages.length)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              id="next"
              className="absolute inset-y-0 right-0 flex items-center justify-center p-2 opacity-50"
              onClick={() => setPromoIndex((prevIndex) => (prevIndex + 1) % promoImages.length)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* promo end */}

     {/* Kategori & Pulsa Start */}
      <section className="pt-10">
  <div className="container mx-auto">
    <div className="flex flex-wrap md:flex-nowrap gap-6 p-4 rounded-lg shadow-lg">
      {/* Kategori Pilihan */}
      <div className="flex-1">
        <p className="font-bold text-xl mb-4">Kategori Pilihan</p>
        <div className="relative flex items-center justify-center">
          {/* Images */}
          <Category visibleCategoryImages={visibleCategoryImages}/>
          {/* Button Prev */}
          <button
            onClick={showPrevCategory}
            className="absolute left-0 p-2 opacity-50 hover:opacity-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          {/* Button Next */}
          <button
            onClick={showNextCategory}
            className="absolute right-0 p-2 opacity-50 hover:opacity-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Top Up & Pulsa */}
      <div className="flex-1">
        <p className="font-bold text-xl mb-4">
          Top Up &amp; Tagihan{" "}
          <a
            href="#"
            className="font-semibold text-base text-green-500 hover:text-green-700 transition"
          >
            Lihat Semua
          </a>
        </p>
        <div className="border rounded-lg p-4">
          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="#" className="text-base">
              Pulsa
            </a>
            <a href="#" className="text-base">
              Paket Data
            </a>
            <a href="#" className="text-base">
              Token
            </a>
            <a href="#" className="text-base">
              Listrik PLN
            </a>
          </div>
          {/* Form */}
          <form className="space-y-4">
            <label className="block text-sm">
              Nomor Telepon
              <input
                type="number"
                name="nomor"
                placeholder="Masukan Nomor"
                className="block w-full mt-1 rounded-md  shadow-sm focus:ring-green-400 focus:border-green-400 focus:outline-none ring-1"
              />
            </label>
            <label className="block text-sm">
              Nominal
              <select
                name="nominal"
                id="nominal"
                className="block w-full mt-1 rounded-md  shadow-sm focus:ring-green-400 focus:border-green-400 focus:outline-none ring-1"
              >
                <option value="option1">5.000</option>
                <option value="option2">10.000</option>
                <option value="option3">15.000</option>
              </select>
            </label>
          </form>
          {/* Button */}
          <button className="w-full mt-4 py-2 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            Beli
          </button>
        </div>
      </div>
    </div>
  </div>
      </section>
{/* Kategori & Pulsa End */}


  {/* lagi trend */}
     <section className="pt-10">
    <div className="container">
      <p className="font-bold text-xl flex items-center">
        Lagi trending nih
        <a
          href="#"
          className="font-semibold text-base m-2 text-green-500 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={20}
            height={20}
            viewBox="0 0 30 30"
            className="m-2 fill-current text-green-500"
          >
            <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z" />
          </svg>
          Muat lainnya
        </a>
      </p>
      <div className="my-5 grid grid-cols-4 gap-2">
        <div className="h-24 bg-white rounded-lg flex items-center font-bold text-xl shadow-lg">
          <img
            src="src/img/trending/image.png"
            alt="gdf"
            className="rounded-lg h-full w-auto"
          />
          <div className="ml-4">
            <p>Hot wheels</p>
            <span className="text-sm text-slate-300 block">407rb produk</span>
          </div>
        </div>
        <div className="h-24 bg-white rounded-lg flex items-center font-bold text-xl shadow-lg">
          <img
            src="src/img/trending/img2.jpg"
            alt="gdf"
            className="rounded-lg h-full w-auto"
          />
          <div className="ml-4">
            <p>Terminal</p>
            <span className="text-sm text-slate-300 block">112rb produk</span>
          </div>
        </div>
        <div className="h-24 bg-white rounded-lg flex items-center font-bold text-xl shadow-lg">
          <img
            src="src/img/trending/img3.jpg"
            alt="gdf"
            className="rounded-lg h-full w-auto"
          />
          <div className="ml-4">
            <p>Lampu</p>
            <span className="text-sm text-slate-300 block">307rb produk</span>
          </div>
        </div>
        <div className="h-24 bg-white rounded-lg flex items-center font-bold text-xl shadow-lg">
          <img
            src="src/img/trending/img4.jpg"
            alt="gdf"
            className="rounded-lg h-full w-auto"
          />
          <div className="ml-4">
            <p>Ipad</p>
            <span className="text-sm text-slate-300 block">200rb produk</span>
          </div>
        </div>
        <div className="h-24 bg-white rounded-lg flex items-center font-bold text-xl shadow-lg">
          <img
            src="src/img/trending/img5.jpg"
            alt="gdf"
            className="rounded-lg h-full w-auto"
          />
          <div className="ml-4">
            <p>AGI</p>
            <span className="text-sm text-slate-300 block">102rb produk</span>
          </div>
        </div>
        <div className="h-24 bg-white rounded-lg flex items-center font-bold text-xl shadow-lg">
          <img
            src="src/img/trending/img6.jpg"
            alt="gdf"
            className="rounded-lg h-full w-auto"
          />
          <div className="ml-4">
            <p>Keyboard</p>
            <span className="text-sm text-slate-300 block">407rb produk</span>
          </div>
        </div>
        <div className="h-24 bg-white rounded-lg flex items-center font-bold text-xl shadow-lg">
          <img
            src="src/img/trending/img7.jpg"
            alt="gdf"
            className="rounded-lg h-full w-auto"
          />
          <div className="ml-4">
            <p>Stand Holder</p>
            <span className="text-sm text-slate-300 block">305rb produk</span>
          </div>
        </div>
        <div className="h-24 bg-white rounded-lg flex items-center font-bold text-xl shadow-lg">
          <img
            src="src/img/trending/img8.jpg"
            alt="gdf"
            className="rounded-lg h-full w-auto"
          />
          <div className="ml-4">
            <p>Sepatu</p>
            <span className="text-sm text-slate-300 block">207rb produk</span>
          </div>
        </div>
      </div>
    </div>
     </section>
  {/* lagi trend end */}

  <div className="pt-10">
    <div className="border bg-slate-800 w-full shadow-lg" />
  </div>

  {/* bayar di tempat */}
    <section className="pt-10">
    <div className="container">
      <p className="font-bold text-xl">Bayar di tempat &lt; 49rb</p>
      <div className="my-5 grid grid-cols-6 gap-2">
        <div className="h-80 w-44 items-center rounded-lg shadow-lg flex-wrap">
          <img src="src/img/cod/cod1.jpg" alt={1} className="rounded-lg" />
          <p className="text-base px-2">
            Elipsesinc - kaos oversize pria wanita...
          </p>
          <p className=" font-bold px-2">RP.43.900</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Barat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 60+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-lg flex-wrap">
          <img src="src/img/cod/cod2.png" alt={1} className="rounded-lg" />
          <p className="text-base px-2">Headset / earphone</p>
          <p className=" font-bold px-2">RP.21.000</p>
          <p className="text-sm px-2 line-through">
            RP.200.000 <span className="absolute px-1 text-red-600">89,5%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Selatan
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.0 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-lg flex-wrap">
          <img src="src/img/cod/cod3.jpg" alt={1} className="rounded-lg" />
          <p className="text-base px-2">Hippo - Headset / earphone</p>
          <p className=" font-bold px-2">RP.12.500</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Barat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 300+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-lg flex-wrap">
          <img src="src/img/cod/cod4.jpg" alt={1} className="rounded-lg" />
          <p className="text-base px-2">kaos combed30s pria wanita</p>
          <p className=" font-bold px-2">RP.25.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Barat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.5 | 600+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-lg flex-wrap">
          <img src="src/img/cod/cod5.jpg" alt={1} className="rounded-lg" />
          <p className="text-base px-2">Headset / earphone - Pinzy</p>
          <p className=" font-bold px-2">RP.30.900</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Cikampek
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 205+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-lg flex-wrap">
          <img src="src/img/cod/cod6.jpg" alt={1} className="rounded-lg" />
          <p className="text-base px-2">Earphone - Pinzy</p>
          <p className=" font-bold px-2">RP.25.000</p>
          <p className="text-sm px-2 line-through">
            RP.100.000 <span className="absolute px-1 text-red-600">75%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Timur
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 102+ terjual
          </p>
        </div>
      </div>
    </div>
    </section>
  {/* bayar di tempat end */}


  <div class="pt-10">
        <div class="p-1 bg-slate-300 bg-opacity-40 w-full shadow-lg"></div>
      </div> 

  {/* menu kebutuhan */}
  <section id='menuKebutuhan' className="pt-10">
    <div className="container">
      {/* grid button */}
      <div id='gridButton' className="my-4 grid grid-cols-5 gap-4">
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
      <div className="my-5 grid grid-cols-6 gap-2">
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm1.png"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Wajan / frypan maxim</p>
          <p className=" font-bold px-2">RP.60.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Semarang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.9 | 260+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm2.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Cobek Estetik</p>
          <p className=" font-bold px-2">RP.175.000</p>
          <p className="text-sm px-2 line-through">
            RP.200.000 <span className="absolute px-1 text-red-600">12,5%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Selatan
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.0 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm3.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Gotto - panci listrik</p>
          <p className=" font-bold px-2">RP.49.900</p>
          <p className="text-sm px-2 line-through">
            RP.166.300<span className="absolute px-1 text-red-600">70%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Tangerang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.8 |2rb+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm4.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Cobek Batu</p>
          <p className=" font-bold px-2">RP.29.281</p>
          <p className="text-sm px-2 line-through">
            RP.32.000 <span className="absolute px-1 text-red-600">11%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Surabaya
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.5 | 1rb+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm5.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Goto - hopo Electric</p>
          <p className=" font-bold px-2">RP.89.900</p>
          <p className="text-sm px-2 line-through">
            RP.300.000 <span className="absolute px-1 text-red-600">70%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Cikampek
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 205+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm6.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Moegen - New Grill BBQ</p>
          <p className=" font-bold px-2">RP.198.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Bandung
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm7.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Carbon Steel Wok 32</p>
          <p className=" font-bold px-2">RP.249.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 60+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm8.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Rinnai - kompor gas</p>
          <p className=" font-bold px-2">RP.323.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.0 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm9.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Kris Termos Vacum</p>
          <p className=" font-bold px-2">RP.79.920</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Sukabumi
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 300+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm10.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Meat Press - alat Press</p>
          <p className=" font-bold px-2">RP.147.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Barat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.5 | 600+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm11.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Kantung Saringan</p>
          <p className=" font-bold px-2">RP.4.338</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Depok
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 2rb+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm12.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Skitchen - Aurora Dutch Oven 24cm</p>
          <p className=" font-bold px-2">RP.995.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Selatan
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm13.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Wadah Saringan</p>
          <p className=" font-bold px-2">RP.21.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Barat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 60+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm14.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Teko Listrik</p>
          <p className=" font-bold px-2">RP.249.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Barat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.0 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm15.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">GM Bear Panci Listrik (2in1)</p>
          <p className=" font-bold px-2">RP.83.900</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kab. Tangerang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 300+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm16.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Gas Portable Tokai 235gr</p>
          <p className=" font-bold px-2">RP.15.298</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Utara
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.5 | 600+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm17.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Rinnai - Kompor Gas</p>
          <p className=" font-bold px-2">RP.192.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 205+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm18.png"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Wajan Baja</p>
          <p className=" font-bold px-2">RP.221.340</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm19.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Tutup Panci Kaca</p>
          <p className=" font-bold px-2">RP.39.600</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Timur
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 60+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm20.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Gm Bear Panci Listrik</p>
          <p className=" font-bold px-2">RP.83.900</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kab. Tangerang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.0 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm21.png"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Wajan Baja</p>
          <p className=" font-bold px-2">RP.221.340</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 300+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm22.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Stockholm Skillet by Skitchen</p>
          <p className=" font-bold px-2">RP.299.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Selatan
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.5 | 600+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm23.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Cobek Estetik</p>
          <p className=" font-bold px-2">RP.175.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Cikampek
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 205+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm24.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Kris Termos Vakum</p>
          <p className=" font-bold px-2">RP.79.920</p>
          <p className="text-sm px-2 line-through">
            RP.99.000 <span className="absolute px-1 text-red-600">20%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kab. Karawang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 102+ terjual
          </p>
        </div>
      </div>
      <div className="p-5 text-center">
        <button className="text-green-500 font-bold border border-green-500 rounded-md text-center h-10 w-1/2">
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  </section>
  {/* menu kebutuhan */}


  <div className="pt-10">
    <div className="bg-slate-900 border w-full" />
  </div>

  {/* Footer */}
  <footer id='footer' className="pt-10">
  <div className="container flex flex-wrap cursor-pointer">
    {/* Kolom Tokopedia */}
    <div className="flex-1">
      <h3 className="font-bold text-xl py-2">Tokopedia</h3>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600">About Tokopedia</p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600">
        Intellectual Property Rights
      </p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600">Career</p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600">Blog</p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600">Tokopedia Affiliate program</p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600">Tokopedia B2B Digital</p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600 ">
        Tokopedia Marketing Solutions
      </p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600 ">
        Kalkulator indeks Masa Tubuh
      </p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600 ">Tokopedia Farma</p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600 ">Promo Hari Ini</p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600 ">Beli Lokal</p>
      <p className="text-sm text-slate-400 py-2 hover:text-green-600 ">Promo Guncang</p>
    </div>
    <div className="flex-1">
      {/* Kolom Beli */}
      <div className="flex-1 order-1">
        <h3 className="font-bold text-xl">Buy</h3>
        <p className="text-sm text-slate-400 py-2 hover:text-green-600 ">Bill &amp; Topup</p>
        <p className="text-sm text-slate-400 py-2 hover:text-green-600 ">Tokopedia COD</p>
        <p className="text-sm text-slate-400 py-2 hover:text-green-600 ">Bebas Ongkir</p>
      </div>
      {/* Kolom Jual */}
      <div className="flex-1 order-2">
        <h3 className="font-bold text-xl">Sell</h3>
        <p className="text-sm text-slate-400 py-2 hover:text-green-600">Seller Education Center</p>
        <p className="text-sm text-slate-400 py-2 hover:text-green-600">Register Official Store</p>
      </div>
      {/* Kolom Bantuan dan Panduan */}
      <div className="flex-1 order-3">
        <h3 className="font-bold text-xl">Guide and Help</h3>
        <p className="text-sm text-slate-400 py-2  hover:text-green-600">Tokopedia Care</p>
        <p className="text-sm text-slate-400 py-2  hover:text-green-600">Terms and Condition</p>
        <p className="text-sm text-slate-400 py-2  hover:text-green-600">Privasi</p>
      </div>
    </div>

    {/* sosial media */}
    <div className="flex-1">
      <div className="font-bold text-xl">Follow Us</div>
      <div className="flex">
        {/* instagram */}
        <div className="px-1">
          <a href="https://www.instagram.com/tokopedia">
            <svg
            className='transform transition-transform duration-300 hover:scale-125'
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={25}
              height={25}
              viewBox="0 0 48 48"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#fd5" />
                <stop offset=".328" stopColor="#ff543f" />
                <stop offset=".348" stopColor="#fc5245" />
                <stop offset=".504" stopColor="#e64771" />
                <stop offset=".643" stopColor="#d53e91" />
                <stop offset=".761" stopColor="#cc39a4" />
                <stop offset=".841" stopColor="#c837ab" />
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              />
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#4168c9" />
                <stop offset=".999" stopColor="#4168c9" stopOpacity={0} />
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              />
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              />
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              />
            </svg>
          </a>
        </div>
        {/* Twitter */}
        <div className="px-1">
          <a href="https://x.com/tokopedia">
            <svg
            className='transform transition-transform duration-300 hover:scale-125'
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={25}
              height={25}
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
            </svg>
          </a>
        </div>
        {/* Pinterest  */}
        <div className="px-1">
          <a href="https://www.pinterest.com/tokopedia/">
            <svg
            className='transform transition-transform duration-300 hover:scale-125'
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={25}
              height={25}
              viewBox="0 0 48 48"
            >
              <circle cx={24} cy={24} r={20} fill="#E60023" />
              <path
                fill="#FFF"
                d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"
              />
            </svg>
          </a>
        </div>
        {/* facebook  */}
        <div className="px-1">
          <a href="https://web.facebook.com/tokopedia?_rdc=1&_rdr">
            <svg
            className='transform transition-transform duration-300 hover:scale-125'
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={25}
              height={25}
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              />
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="pt-96">
    <div className="bg-slate-900 border w-full" />
  </div>
  <p className="text-center text-sm text-slate-400 py-2">
    ©1999 - 2222, PT.Tokopaedi
  </p>
</footer>
  {/* Footer end */}

  
    </>
  )
}

export default Home;
