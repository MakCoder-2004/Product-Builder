import { useState } from "react";

// ** Utils
import { textSlicer } from "../utils/functions";
import { putZerosAfterPrice } from "../utils/functions";

// ** Data
import { Products } from "../data/index";

// ** Interfaces
import { Iproducts } from "../interfaces";

// ** UI Components
import Button from "./UI/Button";
import ColorButton from "./UI/ColorButton";
import SizeButton from "./UI/SizeButton";
import ProductFilter from "./ProductFilter";

// ** Modals
import AddProductModal from "./Modals/AddProductModal";
import EditProductModal from "./Modals/EditProductModal";
import RemoveProductModal from "./Modals/RemoveProductModal";

const ProductCard = () => {
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

  // ** States
  const [allProducts, setAllProducts] = useState<Iproducts[]>(Products);
  const [filteredProducts, setFilteredProducts] = useState<Iproducts[]>(Products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Iproducts>(defaultObject);
  const [productToDeleteId, setProductToDeleteId] = useState("");

  // ** Modal Handlers
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (product: Iproducts) => {
    setProductToEdit(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setProductToEdit(defaultObject);
  };

  const openRemoveModal = (productId: string) => {
    setProductToDeleteId(productId);
    setIsRemoveModalOpen(true);
  };

  const closeRemoveModal = () => {
    setIsRemoveModalOpen(false);
    setProductToDeleteId("");
  };

  // ** Handlers
  const handleDeleteClick = () => {
    const updatedProducts = allProducts.filter(
      (product) => product.id !== productToDeleteId
    );
    setAllProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    closeRemoveModal();
  };

  const handleUpdateProduct = (updatedProduct: Iproducts) => {
    const updatedProducts = allProducts.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setAllProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    closeEditModal();
  };

  const handleAddProduct = (newProduct: Iproducts) => {
    const updatedProducts = [...allProducts, newProduct];
    setAllProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    closeAddModal();
  };

  const resetFilters = () => {
    setFilteredProducts(allProducts);
    setIsFilterOpen(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-3 md:mb-6 gap-2 sm:gap-3">
        <h1 className="font-Montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500">
          Products
        </h1>
        <div className="flex gap-2 sm:gap-3">
          <Button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm"
          >
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </Button>
          <Button
            onClick={openAddModal}
            className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm"
          >
            Add New Product
          </Button>
        </div>
      </div>

      {/* Main content with filter and products */}
      <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
        {/* Filter Section - Mobile */}
        {isFilterOpen && (
          <div className="lg:hidden mb-3">
            <ProductFilter
              products={allProducts}
              onFilter={setFilteredProducts}
            />
          </div>
        )}

        {/* Filter Section - Desktop */}
        <div className="hidden lg:block lg:w-1/4">
          <ProductFilter
            products={allProducts}
            onFilter={setFilteredProducts}
          />
        </div>

        {/* Products Grid */}
        <div className="w-full lg:w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-6 md:py-8 lg:py-10">
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-500 mb-2">
                No products match your filters
              </h3>
              <Button
                onClick={resetFilters}
                className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 text-sm"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <img
                    src={product.imageURL}
                    alt={product.title}
                    className="w-full h-36 sm:h-40 md:h-44 object-cover"
                  />
                  <div className="p-2 sm:p-3 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h2 className="font-Montserrat text-base sm:text-lg font-semibold mb-1">
                        {textSlicer(product.title, 25)}
                      </h2>
                      <p className="font-Montserrat text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                        {product.category.name}
                      </p>

                      {/* Colors */}
                      <div className="flex gap-1 my-1 sm:my-2">
                        {product.colors.map((color, index) => (
                          <ColorButton
                            key={index}
                            color={color}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                          />
                        ))}
                      </div>

                      {/* Sizes */}
                      <div className="flex gap-1 my-1 sm:my-2 flex-wrap">
                        {product.sizes.map((size, index) => (
                          <SizeButton
                            key={index}
                            size={size}
                            className="text-xxs xs:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1"
                          />
                        ))}
                      </div>

                      {/* Price */}
                      <p className="font-Almarai text-base sm:text-lg md:text-xl font-bold my-1 sm:my-2">
                        ${putZerosAfterPrice(product.price)}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-2 sm:mt-3">
                      <Button
                        onClick={() => openEditModal(product)}
                        className="bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 rounded-md text-xxs xs:text-xs sm:text-sm flex-grow"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => openRemoveModal(product.id)}
                        className="bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded-md text-xxs xs:text-xs sm:text-sm flex-grow"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <AddProductModal
        isOpen={isAddModalOpen}
        close={closeAddModal}
        onAddProduct={handleAddProduct}
      />

      <EditProductModal
        isOpen={isEditModalOpen}
        close={closeEditModal}
        productToEdit={productToEdit}
        onUpdateProduct={handleUpdateProduct}
      />

      <RemoveProductModal
        isOpen={isRemoveModalOpen}
        close={closeRemoveModal}
        onConfirm={handleDeleteClick}
      />
    </div>
  );
};

export default ProductCard;