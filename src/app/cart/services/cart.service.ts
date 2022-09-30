import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartProduct } from '../cart.interface';
import { ProductBase } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts$: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);

  constructor() { }

  public add(product: ProductBase, amount: CartProduct['amount']): void {
    const newProductId = String(this.cartProducts$.value.length + 1);
    const newProduct = {
      id: newProductId,
      info: product,
      amount,
    };
    this.cartProducts$.next([...this.cartProducts$.value, newProduct]);
  }

  public getAll(): Observable<CartProduct[]> {
    return this.cartProducts$;
  }
}
