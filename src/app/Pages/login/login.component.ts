import { Component } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constant/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  logoUrl = LOGO_URL;
  bgUrl = BG_IMG_URL;

  email!:string;
  password!:string;

  onSubmit()
  {
    // Validation password and email
    if (this.email || this.password)
    {
      alert("provide email or password")  
      return ;
    }
    // V & P are correct => login
    
  }
}
