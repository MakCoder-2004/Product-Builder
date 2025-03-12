export interface Iproducts {
    id?: string;
    title: string;
    description: string;
    imageURL: string;
    price: number;
    colors: string[];
    category: {
        id?: string;
        name: string;
        imageURL: string;
    };
}

export interface IProductFormList {
    id: string;
    name: string;
    label: string;
    type: string;
    required: boolean;
}