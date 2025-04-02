import {
  Iproducts,
  IProductFormList,
  IProductCategory,
} from "../interfaces/index";

import { v4 as uuid } from "uuid";

// ** Import Product Images

import airJordan1Low from '../assets/images/sneakers/WMNS+AIR+JORDAN+1+LOW.png';
import airJordan1 from '../assets/images/sneakers/AIR JORDAN 1.png';
import airJordan3 from '../assets/images/sneakers/AIR JORDAN 3 RETRO.png';
import airJordan5 from '../assets/images/sneakers/AIR JORDAN 5 RETRO.png';
import airJordan11 from '../assets/images/sneakers/AIR JORDAN 11 RETRO.png';
import airJordan12 from '../assets/images/sneakers/AIR JORDAN 12 RETRO.png';
import airMax from '../assets/images/sneakers/AIR MAX .png';
import airJordanBrooklyn from '../assets/images/sneakers/W AIR JORDAN BROOKLYN .png';

export const Products: Iproducts[] = [
  {
      id: uuid(),
      title: "Air Jordan 5 Retro OG 'Black Metallic Reimagined'",
      description: "A classic Air Jordan 5 with a black metallic colorway, reimagined for modern sneaker enthusiasts.",
      imageURL: airJordan5,
      price: "278.00",
      colors: ["#000000", "#D3D3D3"], // Black, Light Gray
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
      imageURL: airJordan3,
      price: "229.00",
      colors: ["#000000"], // Black
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
      imageURL: airJordan11,
      price: "230.00",
      colors: ["#FFFFFF", "#1D4ED8"], // White, Navy Blue
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
      imageURL: airJordan1Low,
      price: "121.00",
      colors: ["#000000", "#C0C0C0"], // Black, Silver
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
      imageURL: airJordan12,
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
      imageURL: airJordan1,
      price: "261.00",
      colors: ["#A52A2A"],
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
      imageURL: airJordanBrooklyn,
      price: "220.00",
      colors: ["#000000", "#808080"],
      category: {
          id: "1",
          name: "Sneakers",
          imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/310/original/860430_00.png.png",
      },
      sizes: ["MD", "XL"],
  },
  {
      id: uuid(),
      title: "Air Jordan 1 Retro 'Black Toe Reimagined' 2025",
      description: "A fresh take on the classic 'Black Toe' colorway, reimagined for modern sneaker fans.",
      imageURL: airMax,
      price: "180.00",
      colors: ["#000000", "#FFFFFF", "#FF0000"],
      category: {
          id: "1",
          name: "Sneakers",
          imageURL: "https://image.goat.com/750/attachments/product_template_pictures/images/082/721/311/original/860431_00.png.png",
      },
      sizes: ["SM", "MD", "XL", "2XL"],
  }
];

// ** --------------------------------

// ** Import Categories Images

import sneakers from '../assets/images/categories/sneakers.png';
import boots from '../assets/images/categories/boots.png';
import socks from '../assets/images/categories/socks.png';
import jackets from '../assets/images/categories/jackets.png';
import accessories from '../assets/images/categories/accessories.png';
import shoes from '../assets/images/categories/shoes.png';
import tShirts from '../assets/images/categories/tShirts.png';

export const ProductCategories: IProductCategory[] = [
  {
    id: uuid(),
    categoryName: "Sneakers",
    imageURL:
      sneakers,
  },
  {
    id: uuid(),
    categoryName: "Boots",
    imageURL:
      boots,
  },
  {
    id: uuid(),
    categoryName: "Socks",
    imageURL:
      socks,
  },
  {
    id: uuid(),
    categoryName: "Jackets",
    imageURL:
      jackets,
  },
  {
    id: uuid(),
    categoryName: "Accessories",
    imageURL:
    accessories,
  },
  {
    id: uuid(),
    categoryName: "Shoes",
    imageURL:
      shoes,
  },
  {
    id: uuid(),
    categoryName: "T-Shirts",
    imageURL: tShirts,
  },
];

// ** --------------------------------

export const ProductFormList: IProductFormList[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
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

export const ProductColors: { name: string, hex: string }[] = [
    { name: "Black",        hex: "#000000" },
    { name: "White",        hex: "#FFFFFF" },
    { name: "Gray",         hex: "#808080" },
    { name: "Light Gray",   hex: "#A8A9AD" },
    { name: "Navy Blue",    hex: "#1D4ED8" },
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
  { name: "SM" },
  { name: "MD" },
  { name: "LG" },
  { name: "XL" },
  { name: "2XL" },
  { name: "3XL" },
];
