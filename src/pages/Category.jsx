import React from "react";


export const categoryImages = [
  "src/img/kategori/figure.webp",
  "src/img/kategori/flatshoes.webp",
  "src/img/kategori/hardisk.webp",
  "src/img/kategori/makanan.webp",
  "src/img/kategori/tasselempang.webp",
  "src/img/kategori/toples.webp",
];

const Category = ({ visibleCategoryImages, showPrevCategory, showNextCategory }) => {
  return (
    <div>
      <button onClick={showPrevCategory}>Prev</button>
      <div className="grid grid-cols-4 gap-4">
        {visibleCategoryImages.map((image, idx) => (
          <img key={idx} src={image} alt="Category" className="w-full h-auto" />
        ))}
      </div>
      <button onClick={showNextCategory}>Next</button>
    </div>
  );
};

export default Category;