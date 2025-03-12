// ** Import Functions
import { textSlicer } from "../utils/functions";

// ** Import UI
import ColorButton from "./UI/ColorButton";
import SizeButton from "./UI/SizeButton";
import Button from "./UI/Button";
import Dialog  from "./UI/Dialog";

// ** Import data
import { products } from "../data/index";
const ProductCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 m-10">

      {/* Header Section */}
      <div className="flex justify-between items-center w-full my-6">
        <h1 className="font-Montserrat font-bold text-4xl text-start my-4 text-blue-500 ">
          Products
        </h1>
        <Dialog />
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-slate-300 rounded-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="w-full">
              <img
                src={product.imageURL}
                alt={product.title}
                width={250}
                height={200}
                className="rounded-t-md w-full"
              />
            </div>

            {/* Content */}
            <div className="w-full p-2">
              {/* Title & Category */}
              <div>
                <h2 className="font-Montserrat text-2xl">
                  {textSlicer(product.title)}
                </h2>
                <p className="font-Montserrat text-lg text-gray-500">
                  {product.category.name}
                </p>
              </div>

              {/* Colors */}
              <div className="flex gap-1 mt-2">
                {product.colors.map((color, index) => (
                  <ColorButton key={index} style={{ backgroundColor: color }} />
                ))}
              </div>

              {/* Size */}
              <div className="flex gap-1 mt-2">
                <SizeButton>SM</SizeButton>
                <SizeButton>MD</SizeButton>
                <SizeButton>LG</SizeButton>
                <SizeButton>XL</SizeButton>
              </div>

              {/* Price */}
              <p className="font-Almarai text-2xl my-2">${product.price}</p>

              {/* Buttons */}
              <div className="flex flex-row space-x-2 mt-2">
                <Button className="bg-blue-500 text-white hover:bg-blue-600">
                  Edit
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-600">
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

