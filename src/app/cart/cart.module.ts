import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { CartRoutingModule } from './cart-routing.module';

import { CartComponent } from './pages/cart/cart.component';
import { OrderTableComponent } from './components/order-table/order-table.component';


@NgModule({
  declarations: [
    OrderTableComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule,
  ]
})
export class CartModule { }
