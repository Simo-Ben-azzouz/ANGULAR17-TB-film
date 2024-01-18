import { Component } from '@angular/core';
import { DMainComponent } from '../../components/dashboard/d-main/d-main.component';
import { DSideNavComponent } from '../../components/dashboard/d-side-nav/d-side-nav.component';
import { DHeaderComponent } from '../../components/dashboard/d-header/d-header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DMainComponent,DSideNavComponent,DHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
