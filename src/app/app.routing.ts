import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ItemsComponent } from "./items/items.component";
import { SidebarComponent } from "./login/sidebar.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'sidebar',
        component:SidebarComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      }
      
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
