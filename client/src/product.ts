export interface Product{
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type?: string; //it is optional property
    brand: string;
    quantityInStock?: number; //it is optional property
}