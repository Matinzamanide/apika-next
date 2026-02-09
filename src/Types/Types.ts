export interface IChildren{
    children:React.ReactNode;
}
export interface IProduct {
  id:number;
    title: string;
    price?: string; 
    before_discount_price?: string;
    images: string[]; 
    categories: string[];
    brand:string
    inventory: string |number;
    specifications: Specification[];
    product_features: string[]
    catalog_url?: string; 
  }
  export interface Specification {
    [key: string]: string; 
  }
  