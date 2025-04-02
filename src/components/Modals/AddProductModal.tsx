import { useState, ChangeEvent, FormEvent } from "react";
import { v4 as uuid } from "uuid";

// ** Validation
import { productValidation } from "../../validation/index";

// ** Data
import {
  ProductColors,
  ProductSizes,
  ProductCategories,
  ProductFormList,
} from "../../data/index";

// ** Interfaces
import { Iproducts } from "../../interfaces";

interface AddProductModalProps {
  isOpen: boolean;
  close: () => void;
  onAddProduct: (product: Iproducts) => void;
}

// ** UI Components
import SelectMenue from "../UI/SelectMenue";
import Button from "../UI/Button";
import ErrorMsg from "../UI/ErrorMsg";

const defaultObject: Iproducts = {
  id: "",
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: [],
  sizes: [],
  category: {
    id: "",
    name: "",
    imageURL: "",
  },
};

const defaultErrors = {
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: "",
  sizes: "",
};

const AddProductModal = ({ isOpen, close, onAddProduct }: AddProductModalProps) => {
  // ** States
  const [product, setProduct] = useState<Iproducts>(defaultObject);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(ProductCategories[0]);
  const [errors, setErrors] = useState(defaultErrors);

  // ** Event Handlers
  const onChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const onCancel = () => {
    setProduct(defaultObject);
    setSelectedColors([]);
    setSelectedSizes([]);
    setErrors(defaultErrors);
    close();
  };

  const toggleColorSelection = (colorHex: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorHex)
        ? prev.filter((hex) => hex !== colorHex)
        : [...prev, colorHex]
    );
    setErrors((prev) => ({ ...prev, colors: "" }));
  };

  const toggleSizeSelection = (sizeName: string) => {
    setSelectedSizes((prev) =>
      prev.includes(sizeName)
        ? prev.filter((name) => name !== sizeName)
        : [...prev, sizeName]
    );
    setErrors((prev) => ({ ...prev, sizes: "" }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const { title, description, price, imageURL } = product;
    const validationResult = productValidation(
      { title, description, price, imageURL },
      selectedColors,
      selectedSizes
    );
    
    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      return;
    }

    const newProduct: Iproducts = {
      ...product,
      id: uuid(),
      colors: selectedColors,
      sizes: selectedSizes,
      category: {
        id: selectedCategory.id,
        name: selectedCategory.categoryName,
        imageURL: selectedCategory.imageURL,
      },
    };

    onAddProduct(newProduct);
    setProduct(defaultObject);
    setSelectedColors([]);
    setSelectedSizes([]);
    close();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-400/55 backdrop-blur-xs flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg w-full max-w-md sm:max-w-2xl max-h-[90vh] overflow-hidden shadow-xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-3 sm:p-4 border-b-2 border-blue-500">
          <h2 className="text-lg sm:text-xl font-bold text-blue-500">
            Add New Product
          </h2>
        </div>

        {/* Modal Form */}
        <form onSubmit={onSubmit}>
          <div className="max-h-[70vh] overflow-y-auto p-3 sm:p-4">
            {/* Form Inputs */}
            {ProductFormList.map((form) => (
              <div key={form.id} className="mb-3 sm:mb-4">
                <label className="block text-sm sm:text-base font-medium text-gray-700">
                  {form.label}
                </label>
                <input
                  type={form.type}
                  name={form.name}
                  id={form.id}
                  required={form.required}
                  className="mt-1 block w-full p-2 sm:p-2.5 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={product[form.name as keyof Iproducts] as string}
                  onChange={onChangeEventHandler}
                />
                <ErrorMsg msg={errors[form.name as keyof typeof errors]} />
              </div>
            ))}

            {/* Sizes Selection */}
            <div className="mb-3 sm:mb-4">
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Sizes:
              </label>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {ProductSizes.map((size) => (
                  <button
                    key={size.name}
                    type="button"
                    className={`relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded border transition-all ${
                      selectedSizes.includes(size.name)
                        ? "bg-blue-100 border-blue-500 text-blue-700"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => toggleSizeSelection(size.name)}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
              <ErrorMsg msg={errors.sizes} />
            </div>

            {/* Category Selection */}
            <div className="mb-3 sm:mb-4">
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Category:
              </label>
              <SelectMenue
                selected={selectedCategory}
                setSelected={setSelectedCategory}
              />
            </div>

            {/* Colors Selection */}
            <div className="mb-3 sm:mb-4">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Colors:
              </label>
              <div className="flex flex-wrap gap-2 my-4 justify-center">
                {ProductColors.map((color) => {
                  const isSelected = selectedColors.includes(color.hex);
                  return (
                    <button
                      key={color.hex}
                      type="button"
                      style={{ backgroundColor: color.hex }}
                      className={`group relative text-sm font-semibold text-white rounded-3xl px-7 py-3 border-2 transition-all 
                        ${isSelected ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-300"}
                      `}
                      title={color.name}
                      onClick={() => toggleColorSelection(color.hex)}
                    >
                      <span
                        className={`absolute inset-0 rounded-3xl ${
                          isSelected ? "opacity-20 bg-gray-500" : "opacity-0 group-hover:opacity-20 bg-gray-500"
                        }`}
                      />
                      <span
                        className={`absolute inset-0 transition-opacity text-xs font-medium text-center flex items-center justify-center 
                          ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                        `}
                      >
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
              <ErrorMsg msg={errors.colors} />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-2 sm:gap-3 p-3 sm:p-4 border-t border-gray-200">
            <Button
              type="button"
              onClick={onCancel}
              className="px-3 sm:px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-3 sm:px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;