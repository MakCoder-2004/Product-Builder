import { Iproducts, IProductFormList, IProductCategory} from "../interfaces/index";
import { v4 as uuid } from "uuid";

export const Products: Iproducts[] = [
    {
        id: uuid(),
        title: "Air Jordan 5 Retro OG 'Black Metallic Reimagined'",
        description: "A classic Air Jordan 5 with a black metallic colorway, reimagined for modern sneaker enthusiasts.",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/304/original/860424_00.png.png",
        price: "278.00",
        colors: ["#000000", "#A8A9AD"],
        category: {
            id: "1",
            name: "Sneakers",
            imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/304/original/860424_00.png.png",
        },
        sizes: ["SM", "MD", "XL"],
    },
    {
        id: uuid(),
        title: "Air Jordan 3 Retro 'Black Cat' 2025",
        description: "The Air Jordan 3 Retro 'Black Cat' features a sleek all-black design, perfect for any occasion.",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/305/original/860425_00.png.png",
        price: "229.00",
        colors: ["#000000"],
        category: {
            id: "1",
            name: "Sneakers",
            imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/305/original/860425_00.png.png",
        },
        sizes: ["SM", "MD"],
    },
    {
        id: uuid(),
        title: "Air Jordan 11 Retro 'Legend Blue / Columbia' 2024",
        description: "A timeless classic, the Air Jordan 11 Retro 'Legend Blue' offers a clean white and blue aesthetic.",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/306/original/860426_00.png.png",
        price: "230.00",
        colors: ["#FFFFFF", "#1D4ED8"],
        category: {
            id: "1",
            name: "Sneakers",
            imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/306/original/860426_00.png.png",
        },
        sizes: ["MD", "XL", "2XL"],
    },
    {
        id: uuid(),
        title: "Gel 1130 'Black Pure Silver' 2023",
        description: "The Gel 1130 combines comfort and style with its black and pure silver colorway.",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/307/original/860427_00.png.png",
        price: "121.00",
        colors: ["#000000", "#C0C0C0"],
        category: {
            id: "1",
            name: "Sneakers",
            imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/307/original/860427_00.png.png",
        },
        sizes: ["SM", "MD"],
    },
    {
        id: uuid(),
        title: "Air Jordan 12 Retro 'Flu Game' 2025",
        description: "The iconic Air Jordan 12 'Flu Game' returns with its classic black and red color scheme.",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/308/original/860428_00.png.png",
        price: "281.00",
        colors: ["#000000", "#FF0000"],
        category: {
            id: "1",
            name: "Sneakers",
            imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/308/original/860428_00.png.png",
        },
        sizes: ["MD", "XL", "2XL"],
    },
    {
        id: uuid(),
        title: "Travis Scott x Air Jordan 1 Retro Low OG SP",
        description: "A collaboration between Travis Scott and Air Jordan, featuring a unique velvet brown colorway.",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/309/original/860429_00.png.png",
        price: "261.00",
        colors: ["#5D4037"],
        category: {
            id: "1",
            name: "Sneakers",
            imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/309/original/860429_00.png.png",
        },
        sizes: ["SM", "MD"],
    },
    {
        id: uuid(),
        title: "Air Jordan 3 Retro OG 'Black Cement' 2024",
        description: "The Air Jordan 3 'Black Cement' OG returns with its classic black and cement grey design.",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/310/original/860430_00.png.png",
        price: "220.00",
        colors: ["#000000", "#7C7C7C"],
        category: {
            id: "1",
            name: "Sneakers",
            imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/310/original/860430_00.png.png",
        },
        sizes: ["MD", "XL"],
    },
    {
        id: uuid(),
        title: "Air Jordan 1 Retro  'Black Toe Reimagined' 2025",
        description: "A fresh take on the classic 'Black Toe' colorway, reimagined for modern sneaker fans.",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/311/original/860431_00.png.png",
        price: "180.00",
        colors: ["#000000", "#FFFFFF", "#FF0000"],
        category: {
            id: "1",
            name: "Sneakers",
            imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/311/original/860431_00.png.png",
        },
        sizes: ["SM", "MD", "XL", "2XL"],
    },
];

export const ProductFormList: IProductFormList[] = [
    {
        id: "title",
        name: "title",
        label: "Product Title", // Changed `Label` to `label`
        type: "text",
        required: true,
    },
    {
        id: "description",
        name: "description",
        label: "Product Description",
        type: "textarea",
        required: true,
    },
    {
        id: "imageURL",
        name: "imageURL",
        label: "Product Image URL",
        type: "text",
        required: true,
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text", // Changed from "number" to "text" since price is now a string
        required: true,
    },
];

export const ProductCategories: IProductCategory[] = [
    { 
        id: uuid(),
        categoryName: "Sneakers",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/307/original/860427_00.png.png" 
    },
    { 
        id: uuid(),
        categoryName: "Boots",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/308/original/860428_00.png.png" 
    },
    {
        id: uuid(),
        categoryName: "Socks",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/309/original/860429_00.png.png"
    },
    {
        id: uuid(),
        categoryName: "Jackets",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/310/original/860430_00.png.png"
    },
    {
        id: uuid(),
        categoryName: "Accessories",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/311/original/860431_00.png.png"
    },
    {
        id: uuid(),
        categoryName: "Shoes",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/312/original/860432_00.png.png"
    },
    {
        id: uuid(),
        categoryName: "T-Shirts",
        imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/313/original/860433_00.png.png"
    }
];

export const ProductColors: { name: string, hex: string }[] = [
    { name: "Black",        hex: "#000000" },
    { name: "White",        hex: "#FFFFFF" },
    { name: "Gray",         hex: "#808080" },
    { name: "Blue",         hex: "#0000FF" },
    { name: "Red",          hex: "#FF0000" },
    { name: "Green",        hex: "#008000" },
    { name: "Yellow",       hex: "#FFFF00" },
    { name: "Orange",       hex: "#FFA500" },
    { name: "Purple",       hex: "#800080" },
    { name: "Brown",        hex: "#A52A2A" },
    { name: "Beige",        hex: "#F5F5DC" },
    { name: "Pink",         hex: "#FFC0CB" },
    { name: "Gold",         hex: "#FFD700" },
    { name: "Silver",       hex: "#C0C0C0" },
    { name: "Teal",         hex: "#008080" },
    { name: "Lavender",     hex: "#E6E6FA" },
];

export const ProductSizes: { name: string }[] = [
    { name: "SM"  },
    { name: "MD"  },
    { name: "LG"  },
    { name: "XL"  },
    { name: "2XL" },
    { name: "3XL" }
];
