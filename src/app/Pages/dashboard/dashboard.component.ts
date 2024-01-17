import { Component } from '@angular/core';
import { DHeaderComponent } from '../../components/dashboard/d-header/d-header.component';
import { DMainComponent } from '../../components/dashboard/d-main/d-main.component';
import { DSideNavComponent } from '../../components/dashboard/d-side-nav/d-side-nav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DHeaderComponent,DMainComponent,DSideNavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
