import React, { useState, useEffect } from 'react';

const Home = () => {
  const [promoIndex, setPromoIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const promoImages = [
    'src/img/promo1.jpg.webp',
    'src/img/promo2.jpg',
    'src/img/promo3.jpg',
    'src/img/promo4.jpg'
  ];

  const categoryImages = [
    'src/img/kategori/figure.webp',
    'src/img/kategori/flatshoes.webp',
    'src/img/kategori/hardisk.webp',
    'src/img/kategori/makanan.webp',
    'src/img/kategori/tasselempang.webp',
    'src/img/kategori/toples.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((prevIndex) => (prevIndex + 1) % promoImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [promoImages.length]);

  const showNextCategory = () => {
    setCategoryIndex((prevIndex) => (prevIndex + 1) % categoryImages.length);
  };

  const showPrevCategory = () => {
    setCategoryIndex((prevIndex) => (prevIndex - 1 + categoryImages.length) % categoryImages.length);
  };

  const visibleCategoryImages = categoryImages.slice(categoryIndex, categoryIndex + 4).concat(
    categoryImages.slice(0, Math.max(0, categoryIndex + 4 - categoryImages.length))
  );

  return (
    <>
      {/* promo start */}
      <section className="pt-36">
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

      {/* kategori & pulsa start */}
      <section className="pt-10">
        <div className="container mx-auto justify-between relative">
          <div className="flex flex-wrap items-start p-3 rounded-lg shadow-lg w-full">
            <div className="flex-wrap">
              <p className="font-bold text-xl">Kategori Pilihan</p>
              <div className="mx-auto my-2 justify-center flex">
                {visibleCategoryImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`ktg${i + 1}`}
                    className="w-20 h-20 mx-1 rounded-lg border"
                  />
                ))}
              {/* button prev */}
              <button onClick={showPrevCategory} className="absolute p-6 left-0 opacity-50 hover:opacity-100">
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
              </svg></button>
              {/* button prev end */}
              {/* button next */}
              <button onClick={showNextCategory} className="absolute right-32 p-6 opacity-50 hover:opacity-100">
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
              {/* button next end */}
                  </div>
            </div>
            {/* topup & pulsa */}
            <div className="pt-4">
              <div className="flex flex-wrap w-full">
                <p className="font-bold text-xl">
                  Top Up &amp; Tagihan{" "}
                  <a
                    href="#"
                    className="font-semibold text-base m-2 transition hover:transition text-green-500 hover:text-green-700"
                  >
                    Lihat Semua
                  </a>
                </p>
                <div className="border my-5 rounded-lg w-full">
                  <a href="#" className="m-2 text-base">
                    Pulsa
                  </a>
                  <a href="#" className="m-2 text-base">
                    Paket Data
                  </a>
                  <a href="#" className="m-2 text-base">
                    Token
                  </a>
                  <a href="#" className="m-2 text-base">
                    Listrik PLN
                  </a>
                  <form action="form" className="flex-wrap p-2 my-4">
                    <label htmlFor="nomor" className="text-sm">
                      {" "}
                      Nomor Telepon
                      <input
                        type="number"
                        name="nomor"
                        placeholder="Masukan Nomor"
                        className="rounded-md ring-1 my-2 mx-4 p-1 focus:ring-green-400 focus:outline-none"
                      />
                    </label>
                    <label htmlFor="nominal" className="flex text-sm my-2">
                      {" "}
                      Nominal
                      <select
                        name="nominal"
                        id="nominal"
                        className="rounded-lg ring-1 my-2 mx-14 p-1 w-1/2 focus:ring-green-400 focus:outline-none"
                      >
                        <option value="option1">5.000</option>
                        <option value="option2">10.000</option>
                        <option value="option3">15.000</option>
                      </select>
                    </label>
                  </form>
                  <button className="w-3/4 h-10 block my-1 text-base font-semibold items-center mx-auto rounded-lg  bg-green-400 hover:bg-green-700 transition hover:transition">
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* kategori & pulsa end */}
    </>
  )
}

export default Home;
