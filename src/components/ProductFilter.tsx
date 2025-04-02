import { useState } from "react";
import { Iproducts } from "../interfaces";
import { ProductCategories, ProductColors, ProductSizes } from "../data";

interface ProductFilterProps {
  products: Iproducts[];
  onFilter: (filteredProducts: Iproducts[]) => void;
}

const ProductFilter = ({ products, onFilter }: ProductFilterProps) => {
  // Filter states
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  // Apply filters
  const applyFilters = () => {
    let filtered = [...products];

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) =>
        product.colors.some((color) => selectedColors.includes(color))
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category.name)
      );
    }

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => selectedSizes.includes(size))
      );
    }

    // Price range filter
    filtered = filtered.filter((product) => {
      const price = parseFloat(product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    onFilter(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedColors([]);
    setSelectedCategories([]);
    setSelectedSizes([]);
    setPriceRange([0, 500]);
    onFilter(products);
  };

  // Toggle color selection
  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Toggle size selection
  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="w-full sm:w-64 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex justify-between mb-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="500"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([parseInt(e.target.value), priceRange[1]])
          }
          className="w-full mb-2"
        />
        <input
          type="range"
          min="0"
          max="500"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], parseInt(e.target.value)])
          }
          className="w-full"
        />
      </div>

      {/* Colors Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {ProductColors.map((color) => (
            <button
              key={color.hex}
              onClick={() => toggleColor(color.hex)}
              className={`w-6 h-6 rounded-full border ${
                selectedColors.includes(color.hex) ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <div className="space-y-2">
          {ProductCategories.map((category) => (
            <div key={category.id} className="flex items-center">
              <input
                type="checkbox"
                id={`cat-${category.id}`}
                checked={selectedCategories.includes(category.categoryName)}
                onChange={() => toggleCategory(category.categoryName)}
                className="mr-2"
              />
              <label htmlFor={`cat-${category.id}`}>
                {category.categoryName}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {ProductSizes.map((size) => (
            <button
              key={size.name}
              onClick={() => toggleSize(size.name)}
              className={`px-3 py-1 border rounded-md ${
                selectedSizes.includes(size.name)
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
