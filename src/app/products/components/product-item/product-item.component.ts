import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductBase } from '../../../cart/product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() item!: ProductBase;

  public amountFormControl = new FormControl('1', [Validators.required]);

  constructor(private cartService: CartService, private router: Router, private _snackBar: MatSnackBar) {}

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'ОК', {
      duration: 3000,
    });
  }

  public add(): void {
    this.cartService.add(this.item, Number(this.amountFormControl.value));
    this.openSnackBar(`${this.item.title} добавлен в корзину`);
    // (click)="openSnackBar(message.value, action.value)
  }

  public open(): void {
    // this.router.navigate(['products', this.item.id]);
  }
}
