import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// ** Validation
import { productValidation } from "../validation/index";

// ** Data
import {
  ProductColors,
  ProductSizes,
  ProductCategories,
  ProductFormList,
} from "../data/index";

// ** Interfaces
import { Iproducts } from "../interfaces";

interface EditProductModalProps {
  isOpen: boolean;
  close: () => void;
  productToEdit: Iproducts;
  setProducts: (updatedProduct: Iproducts) => void;
}

// ** UI Components
import SelectMenue from "./UI/SelectMenue";
import Button from "./UI/Button";
import ErrorMsg from "./UI/ErrorMsg";

const defaultErrors = {
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: "",
  sizes: "",
};

const EditProductModal = ({ isOpen, close, productToEdit, setProducts }: EditProductModalProps) => {
  // ** States
  const [Product, setProduct] = useState<Iproducts>(productToEdit);
  const [selectedColors, setSelectedColors] = useState<string[]>(productToEdit.colors || []);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(productToEdit.sizes || []);
  const [selectedCategory, setSelectedCategory] = useState(
    ProductCategories.find(cat => cat.id === productToEdit.category.id) || ProductCategories[0]
  );
  const [errors, setErrors] = useState(defaultErrors);

  // Update states when productToEdit changes
  useEffect(() => {
    if (isOpen) {
      setProduct(productToEdit);
      setSelectedColors(productToEdit.colors || []);
      setSelectedSizes(productToEdit.sizes || []);
      setSelectedCategory(
        ProductCategories.find(cat => cat.id === productToEdit.category.id) || ProductCategories[0]
      );
      setErrors(defaultErrors);
    }
  }, [productToEdit, isOpen]);

  // ** Event Handlers
  const onChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    
    setProduct(prev => ({
      ...prev,
      [name]: value,
    }));
    
    setErrors(prev => ({
      ...prev,
      [name]: "",
    }));
  };

  const onCancel = () => {
    close();
  };

  const toggleColorSelection = (colorName: string) => {
    setSelectedColors(prev =>
      prev.includes(colorName)
        ? prev.filter(name => name !== colorName)
        : [...prev, colorName]
    );
  };

  const toggleSizeSelection = (SizeName: string) => {
    setSelectedSizes(prev =>
      prev.includes(SizeName)
        ? prev.filter(name => name !== SizeName)
        : [...prev, SizeName]
    );
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
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
      const updatedProduct = {
        ...Product,
        colors: selectedColors,
        sizes: selectedSizes,
        category: {
          id: selectedCategory.id,
          name: selectedCategory.categoryName,
          imageURL: selectedCategory.imageURL,
        },
      };
      setProducts(updatedProduct);
      close();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/65 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg w-full max-w-md sm:max-w-2xl max-h-[90vh] overflow-hidden shadow-xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-3 sm:p-4 border-b-2 border-blue-500">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-500">
            Edit Product
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
                  value={Product[form.name as keyof Iproducts] as string}
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
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSizeSelection(size.name);
                    }}
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
            <div className="block text-sm sm:text-base font-medium text-gray-700">Colors:</div>
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
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;