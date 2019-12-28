import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './modules/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { CategoryComponent } from './modules/category/category.component';
import { ProfilComponent } from './modules/profil/profil.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './modules/signup/signup.component';

import { Routes, RouterModule } from '@angular/router'
import { from } from 'rxjs';
const routes : Routes = [
  {path : 'signup', component : SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
    ProfilComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
