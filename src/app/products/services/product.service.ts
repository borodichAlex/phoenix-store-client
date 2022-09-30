import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductBase } from 'src/app/cart/product.interface';
import productsSource from './productsSource.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl: string = 'http://localhost:3000';

  private products$: BehaviorSubject<ProductBase[]> = new BehaviorSubject<ProductBase[]>([]);

  constructor(private http: HttpClient) {
    this.initLoadProducts();
  }

  private initLoadProducts(): void {
    this.loadProducts();
  }

  public loadProducts(): void {
    // this.http.get<ProductBase[]>(`${this.baseUrl}/products`).subscribe((items) => {
    //   this.products$.next(items);
    // });
    this.products$.next(productsSource.products);
  }

  public getAll(): Observable<ProductBase[]> {
    return this.products$;
  }

  public getById(id: ProductBase['id']): ProductBase | undefined {
    return this.products$.value.find((product) => product.id === id);
  }
}
