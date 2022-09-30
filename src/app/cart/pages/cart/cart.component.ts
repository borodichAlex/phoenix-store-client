import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

interface TableProduct {
  position: string;
  photo: string;
  title: string;
  amount: number;
  price: number;
  priceTotal: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  // public cartProducts$!: Observable<CartProduct[]>;
  public tableProducts$!: Observable<TableProduct[]>;
  public displayedTitles = ['#', 'фото', 'название', 'количество', 'цена за 1 шт.', 'итого'];
  public displayedColumns = ['position', 'photo', 'title', 'amount', 'price', 'priceTotal'];
  private orderTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.tableProducts$ = this.cartService.getAll()
      .pipe(map(products => {
          return products.map(({ id, info, amount }) => {
            const priceTotal = Number(amount) * Number(info.price);
            this.orderTotal += priceTotal;

            return {
              position: id,
              photo: info.imgUrl,
              title: info.title,
              amount,
              price: Number(info.price),
              priceTotal,
            }
          });
        })
      );
  }

  public displayFooterCol(nameCol: string): string {
    if (nameCol === 'photo') {
      return 'Итоговая стоимость';
    }
    if (nameCol === 'priceTotal') {
      return String(this.orderTotal);
    }

    return '';
  }


}
