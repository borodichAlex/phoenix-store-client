import { ProductBase } from "./product.interface";

export interface CartProduct {
  id: string;
  info: ProductBase;
  amount: number;
}
