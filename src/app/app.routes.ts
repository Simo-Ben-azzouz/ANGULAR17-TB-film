import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { BrowseComponent } from './Pages/browse/browse.component';

export const routes: Routes = [
    {
        path : "login",
        component : LoginComponent
    },
    {
        path : "browse",
        component : BrowseComponent
    },
    {
        path : "**",
        redirectTo : "login"
    }
];
