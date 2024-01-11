import { LoginService } from './../../services/login.service';
import { Component, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constant/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  
  bgUrl = BG_IMG_URL;

  email!:string;
  password!:string;

  loginService = inject(LoginService);
  router = inject(Router);
  toasterService = inject(ToastrService);

  // 
  ngOnInit()
  {
    if (this.loginService.isLoggedIn) 
    {
      this.router.navigateByUrl('/browse');  
    }
  }
  onSubmit()
  {
    // Validation password and email
    if (!this.email || !this.password)
    {
      this.toasterService.error("provide email or password")  
      return ;
    }
    // V & P are correct => login
    this.loginService.login(this.email,this.password);
    // redirect to browser page
    this.toasterService.success('logged in successfully .');
    this.router.navigateByUrl('/browse');
  }
 
} 
