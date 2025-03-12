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