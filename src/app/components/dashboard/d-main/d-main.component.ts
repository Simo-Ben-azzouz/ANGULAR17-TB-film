import { Component } from '@angular/core';
import { TopWidgetsComponent } from '../../widgets/top-widgets/top-widgets.component';
import { SalesByMonthComponent } from '../../widgets/sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from '../../widgets/sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from '../../widgets/last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from '../../widgets/top-three-products/top-three-products.component';

@Component({
  selector: 'app-d-main',
  standalone: true,
  imports: [
  TopWidgetsComponent,
  SalesByMonthComponent,
  SalesByCategoryComponent,
  LastFewTransactionsComponent,
  TopThreeProductsComponent
  ],
  templateUrl: './d-main.component.html',
  styleUrl: './d-main.component.scss'
})
export class DMainComponent {

}
