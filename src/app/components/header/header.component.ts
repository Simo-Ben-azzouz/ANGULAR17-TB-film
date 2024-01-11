import { Component } from '@angular/core';
import { LOGO_URL } from '../../constant/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoUrl = LOGO_URL;
}
