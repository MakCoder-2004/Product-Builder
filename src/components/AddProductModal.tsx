import { useState, ChangeEvent, FormEvent } from "react";
import { v4 as uuid } from "uuid";

// ** ----------------------------------------------------------------

// ** Validation
import { productValidation } from "../validation/index";

// ** ----------------------------------------------------------------

// ** Data
import {
  ProductColors,
  ProductSizes,
  ProductCategories,
  ProductFormList,
} from "../data/index";

// ** ----------------------------------------------------------------

// ** Interfaces
import { Iproducts } from "../interfaces";

interface AddProductModalProps {
  isOpen: boolean;
  close: () => void;
  setProducts: React.Dispatch<React.SetStateAction<Iproducts[]>>;
}
// ** ----------------------------------------------------------------

// ** UI Components
import SelectMenue from "./UI/SelectMenue";
import Button from "./UI/Button";
import ErrorMsg from "./UI/ErrorMsg";


// ** ----------------------------------------------------------------

// ** Objects

const defaultObject: Iproducts = {
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

// ** ----------------------------------------------------------------

const AddProductModal = ({ isOpen, close, setProducts }: AddProductModalProps) => {
  
  // ** States
  const [Product, setProduct] = useState<Iproducts>(defaultObject);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(ProductCategories[0]);
  const [errors, setErrors] = useState(defaultErrors);
  
  // ** ----------------------------------------------------------------
  
  // ** Functions
  
  function onChangeEventHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }
  
  function onCancel() {
    setProduct(defaultObject);
    setSelectedColors([]);
    setSelectedSizes([]);
    setErrors(defaultErrors);
    close();
  }
  
  function toggleColorSelection(colorName: string) {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(colorName)
        ? prevSelectedColors.filter((name) => name !== colorName)
        : [...prevSelectedColors, colorName]
      );
    }
    
    function toggleSizeSelection(SizeName: string) {
      setSelectedSizes((prevSelectedSizes) =>
        prevSelectedSizes.includes(SizeName)
      ? prevSelectedSizes.filter((name) => name !== SizeName)
      : [...prevSelectedSizes, SizeName]
    );
  }
  
  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    
    const { title, description, price, imageURL } = Product;
    const { errors, isValid } = productValidation(
      { title, description, price, imageURL },
      selectedColors,
      selectedSizes
    );
    
    if (!isValid) {
      setErrors(errors);
    } else {
      setProducts((prev) => [
        {
          ...Product,
          id: uuid(),
          colors: selectedColors,
          sizes: selectedSizes,
          category: {
            id: selectedCategory.id,
            name: selectedCategory.categoryName,
            imageURL: selectedCategory.imageURL,
          },
        },
        ...prev,
      ]);
      setProduct(defaultObject);
      setSelectedColors([]);
      setSelectedSizes([]);
      close();
    }
  }
  
  if (!isOpen) return null;
  

  // ** ----------------------------------------------------------------

  // ** Render
  return (
    <div className="fixed inset-0 bg-gray-500/65 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-4 border-b-2 border-blue-500">
          <h2 className="text-xl font-semibold text-blue-500">Add New Product</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="max-h-[70vh] overflow-y-auto p-4">
            {ProductFormList.map((form) => (
              <div key={form.id} className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  {form.label}
                </label>
                <input
                  type={form.type}
                  name={form.name}
                  id={form.id}
                  required={form.required}
                  className="p-1.5 mt-1 block w-full border border-gray-300 rounded-md sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  value={Product[form.name as keyof Iproducts] as string}
                  onChange={onChangeEventHandler}
                />
                <ErrorMsg msg={errors[form.name as keyof typeof errors]} />
              </div>
            ))}

            {/* Sizes */}
            <div className="block text-sm font-medium text-gray-700">Sizes:</div>
            <div className="flex flex-wrap gap-2 my-4 justify-center">
              {ProductSizes.map((size) => (
                <button
                  key={size.name}
                  className="group relative text-sm font-semibold text-gray-700 px-7 py-3 border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  title={size.name}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSizeSelection(size.name);
                  }}
                >
                  <span
                    className={`text-gray-500 absolute inset-0 opacity-0 group-hover:opacity-20 bg-gray-500 ${
                      selectedSizes.includes(size.name) ? "opacity-20" : ""
                    }`}
                  />
                  <span className="text-gray-500 absolute inset-0 transition-opacity text-xs font-medium text-center flex items-center justify-center">
                    {size.name}
                  </span>
                </button>
              ))}
              <ErrorMsg msg={errors.sizes} />
            </div>

            {/* Category Menu */}
            <div className="mb-4">
              <SelectMenue
                selected={selectedCategory}
                setSelected={setSelectedCategory}
              />
            </div>

            {/* Colors */}
            <div className="block text-sm font-medium text-gray-700">Colors:</div>
            <div className="flex flex-wrap gap-2 my-4 justify-center">
              {ProductColors.map((color) => (
                <button
                  key={color.name}
                  style={{ backgroundColor: color.hex }}
                  className="group relative text-sm font-semibold text-white rounded-3xl px-7 py-3 border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  title={color.name}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleColorSelection(color.name);
                  }}
                >
                  <span
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gray-500 rounded-3xl ${
                      selectedColors.includes(color.name) ? "opacity-20" : ""
                    }`}
                  />
                  <span
                    className={`absolute inset-0 transition-opacity text-xs font-medium text-center flex items-center justify-center 
                      ${
                        selectedColors.includes(color.name)
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                  >
                    {color.name}
                  </span>
                </button>
              ))}
              <ErrorMsg msg={errors.colors} />
            </div>
          </div>
          <div className="flex flex-row space-x-2 p-4">
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              Add Product
            </Button>
            <Button
              type="button"
              onClick={onCancel}
              className="bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;