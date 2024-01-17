import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { BrowseComponent } from './Pages/browse/browse.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path : "login",
        component : LoginComponent
    },
    {
        path : "dashboard",
        component : DashboardComponent
    },
    {
        path : "browse",
        component : BrowseComponent,
        canActivate : [authGuard]
    },    
  
    {
        path : "**",
        redirectTo : "login"
    },

];
