export const productValidation = (
    product: {
      title: string,
      description: string,
      imageURL: string,
      price: string,
    },
    selectedColors: string[],
    selectedSizes: string[]
  ) => {
    const errors: {
      title: string,
      description: string,
      imageURL: string,
      price: string,
      colors: string,
      sizes: string
    } = {
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
      sizes: ""
    };
  
    let isValid = true;
  
    // Title validation
    if (!product.title.trim() || typeof product.title !== "string") {
      errors.title = "Product title must be a string";
      isValid = false;
    } else if (product.title.length > 80 || product.title.length < 10) {
      errors.title = "Product title must be between 10 and 80 characters";
      isValid = false;
    }
  
    // Description validation
    if (!product.description.trim() || typeof product.description !== "string") {
      errors.description = "Product description must be a string";
      isValid = false;
    } else if (product.description.length > 900 || product.description.length < 10) {
      errors.description = "Product description must be between 10 and 900 characters";
      isValid = false;
    }
  
    // Image URL validation
    if (!product.imageURL.trim() || typeof product.imageURL !== "string") {
      errors.imageURL = "Product image URL must be a valid URL";
      isValid = false;
    }
  
    // Price validation
    const priceValue = parseFloat(product.price);
    if (!product.price.trim() || isNaN(priceValue)) {
      errors.price = "Product price must be a valid number";
      isValid = false;
    } else if (priceValue < 0) {
      errors.price = "Product price must be a positive number";
      isValid = false;
    }
  
    // Color selection validation
    if (selectedColors.length === 0) {
      errors.colors = "Please select at least one color";
      isValid = false;
    }
  
    // Size selection validation
    if (selectedSizes.length === 0) {
      errors.sizes = "Please select at least one size";
      isValid = false;
    }
  
    return { errors, isValid };
  };