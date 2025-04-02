import { useState } from "react";

// ** Utils
import { textSlicer } from "../utils/functions";

// ** ----------------------------------------------------------------

// ** Data
import { Products } from "../data/index";

// ** ----------------------------------------------------------------

// ** Interfaces
import { Iproducts } from "../interfaces";

// ** ----------------------------------------------------------------

// ** UI Components
import Button from "./UI/Button";
import ColorButton from "./UI/ColorButton";
import SizeButton from "./UI/SizeButton";

// ** ----------------------------------------------------------------

// ** Components
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";

// ** ----------------------------------------------------------------

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
  const [AllProducts, setProducts] = useState<Iproducts[]>(Products);
  const [isAddModalOpen, setisAddModalOpen] = useState(false);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);
  const [ProductToEdit, setProductToEdit] = useState<Iproducts>(defaultObject);
  
  // ** Modal Handlers
  const openAddModal = () => {
    setisAddModalOpen(true);
  };
  
  const closeAddModal = () => {
    setisAddModalOpen(false);
  };

  const openEditModal = (product: Iproducts) => {
    setProductToEdit(product);
    setisEditModalOpen(true);
  };
  
  const closeEditModal = () => {
    setisEditModalOpen(false);
    setProductToEdit(defaultObject);
  };
  
  // ** Handlers
  const handleDeleteClick = (productId: string) => {
    const updatedProducts = AllProducts.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleUpdateProduct = (updatedProduct: Iproducts) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    closeEditModal();
  };
  
  return (
    <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 m-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full my-6 space-y-4 sm:space-y-0">
        <h1 className="font-Montserrat font-bold text-4xl text-start my-4 text-blue-500">
          Products
        </h1>
        <Button
          onClick={openAddModal}
          className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2"
        >
          Add New Product
        </Button>
      </div>
      
      {/* Add Product Modal */}
      <AddProductModal 
        isOpen={isAddModalOpen} 
        close={closeAddModal} 
        setProducts={setProducts}
      />

      {/* Edit Product Modal */}
      <EditProductModal 
        isOpen={isEditModalOpen}
        close={closeEditModal}
        productToEdit={ProductToEdit}
        setProducts={handleUpdateProduct}
      />

      {/* Render Product Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {AllProducts.map((product) => (
          <div
            key={product.id}
            className="border border-slate-300 rounded-md flex flex-col items-center hover:shadow-lg"
          >
            <img
              src={product.imageURL}
              alt={product.title}
              width={250}
              height={200}
              className="rounded-t-md w-full"
            />
            <div className="w-full p-2">
              <h2 className="font-Montserrat text-2xl">
                {textSlicer(product.title)}
              </h2>
              <p className="font-Montserrat text-lg text-gray-500">
                {product.category.name}
              </p>

              {/* Colors */}
              <div className="flex gap-1 mt-2">
                {product.colors.map((color, index) => (
                  <ColorButton key={index} style={{ backgroundColor: color }} />
                ))}
              </div>

              {/* Sizes */}
              <div className="flex gap-1 mt-2">
                {product.sizes.map((size, index) => (
                  <SizeButton key={index}>{size}</SizeButton>
                ))}
              </div>

              {/* Price */}
              <p className="font-Almarai text-2xl my-2">${product.price}</p>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <Button 
                  onClick={() => openEditModal(product)}
                  className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 rounded-md"
                >
                  Edit
                </Button>
                <Button 
                  //onClick={() => handleDeleteClick(product.id)}
                  className="bg-red-500 text-white hover:bg-red-600 px-3 py-1 rounded-md"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;