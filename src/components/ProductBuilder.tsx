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

  const [filteredProducts, setFilteredProducts] =
    useState<Iproducts[]>(Products);
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
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-8 gap-4">
        <h1 className="font-Montserrat font-bold text-3xl md:text-4xl text-blue-500">
          Products
        </h1>
        <div className="flex gap-3">
          <Button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-md px-4 py-2"
          >
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </Button>
          <Button
            onClick={openAddModal}
            className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2"
          >
            Add New Product
          </Button>
        </div>
      </div>

      {/* Main content with filter and products */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filter Section */}
        <div
          className={`lg:w-1/4 ${isFilterOpen ? "block" : "hidden lg:block"}`}
        >
          <ProductFilter
            products={allProducts}
            onFilter={setFilteredProducts}
          />
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-500">
                No products match your filters
              </h3>
              <Button
                onClick={resetFilters}
                className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <img
                    src={product.imageURL}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h2 className="font-Montserrat text-xl font-semibold mb-1">
                        {textSlicer(product.title, 25)}
                      </h2>
                      <p className="font-Montserrat text-sm text-gray-500 mb-2">
                        {product.category.name}
                      </p>

                      {/* Colors */}
                      <div className="flex gap-1 my-2">
                        {product.colors.map((color, index) => (
                          <ColorButton
                            key={index}
                            color={color}
                            className="w-5 h-5"
                          />
                        ))}
                      </div>

                      {/* Sizes */}
                      <div className="flex gap-1 my-2 flex-wrap">
                        {product.sizes.map((size, index) => (
                          <SizeButton
                            key={index}
                            size={size}
                            className="text-xs px-2 py-1"
                          />
                        ))}
                      </div>

                      {/* Price */}
                      <p className="font-Almarai text-xl font-bold my-2">
                        ${putZerosAfterPrice(product.price)}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4">
                      <Button
                        onClick={() => openEditModal(product)}
                        className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 rounded-md text-sm flex-grow"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => openRemoveModal(product.id)}
                        className="bg-red-500 text-white hover:bg-red-600 px-3 py-1 rounded-md text-sm flex-grow"
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


      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        close={closeAddModal}
        onAddProduct={handleAddProduct}
      />

      {/* Edit Product Modal */}
      <EditProductModal
        isOpen={isEditModalOpen}
        close={closeEditModal}
        productToEdit={productToEdit}
        onUpdateProduct={handleUpdateProduct}
      />

      {/* Remove Product Modal */}
      <RemoveProductModal
        isOpen={isRemoveModalOpen}
        close={closeRemoveModal}
        onConfirm={handleDeleteClick}
      />
    </div>
  );
};

export default ProductCard;
