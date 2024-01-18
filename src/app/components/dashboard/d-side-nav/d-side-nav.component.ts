import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBox,
  faChartBar,
  faContactBook,
  faDashboard,
  faHand,
  faLocation,
  faMoneyBill,
  faShop
}
  from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-d-side-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './d-side-nav.component.html',
  styleUrl: './d-side-nav.component.scss'
})
export class DSideNavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
}
