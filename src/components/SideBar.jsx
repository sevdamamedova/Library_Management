import React, { useState } from "react";

// Dummy data
const categories = [
  { id: 1, name: "Elektronika" },
  { id: 2, name: "Moda" },
  { id: 3, name: "Ev və Bağ" },
];

// Seçilmiş kategoriya ilə əlaqəli məlumat
const products = {
  1: [
    { id: 1, name: "Telefon" },
    { id: 2, name: "Laptop" },
  ],
  2: [
    { id: 3, name: "Paltar" },
    { id: 4, name: "Ayaqqabı" },
  ],
  3: [
    { id: 5, name: "Çimərlik kreslosu" },
    { id: 6, name: "Sarma" },
  ],
};

const SideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="w-[270px]  bg-gray-400 p-[30px] space-y-8 h-auto ">
      <h1 className="text-[24px]  text-amber-400">Libery Menyu</h1>

      {/* Category Menu */}
      <CategoryMenu categories={categories} onCategoryClick={handleCategoryClick} />

      {/* Category Page */}
      {selectedCategory && <CategoryPage categoryId={selectedCategory} />}
    </div>
  );
};
const CategoryMenu = ({ categories, onCategoryClick }) => {
  return (
    <div>
      <ul className="text-amber-300 text-[20px]">
        {categories.map((category) => (
          <li key={category.id} className=" my-3 ">
            <button onClick={() => onCategoryClick(category.id)}>{category.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CategoryPage = ({ categoryId }) => {
  const productsForCategory = products[categoryId];

  return (
    <div>
      <ul>
        {productsForCategory.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
