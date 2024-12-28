import React, { useEffect, useState } from "react";

// Deklarasi dan export promoImages di top level
export const promoImages = [
  "src/img/promo1.jpg.webp",
  "src/img/promo2.jpg",
  "src/img/promo3.jpg",
  "src/img/promo4.jpg",
];

const Promo = () => {
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((prevIndex) => (prevIndex + 1) % promoImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [promoImages.length]);

  return (
    <div>
      <img
        src={promoImages[promoIndex]}
        alt="Promo"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Promo;
