export interface Iproducts {
    id: string ;
    title: string;
    description: string;
    imageURL: string;
    price: string;
    sizes: string[];
    colors: string[];
    category: {
        id?: string;
        name: string;
        imageURL: string;
    };
}

export interface IProductFormList {
    id: string;
    name: 'title' | 'description' | 'imageURL' | 'price';
    label: string;
    type: string;
    required: boolean;
}

export interface IProductCategory {
    id: string;
    categoryName: string;
    imageURL: string;
}