import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { routing } from "./app.routing";
import { ItemsComponent } from './items/items.component';

// custom validation for password match
import { EqualValidator } from './login/password.match.directive';
import { SidebarComponent } from './login/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginService } from "./login/login.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ItemsComponent,
    EqualValidator,
    SidebarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: 'home', component: HomeComponent },
      // { path: 'todo', component: TodoListComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
