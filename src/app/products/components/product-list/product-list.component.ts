import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductBase } from '../../../cart/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  public products$: Observable<ProductBase[]> | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.initProducts();
  }

  private initProducts(): void {
    this.products$ = this.productService.getAll();
  }
}
