import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './modules/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { CategoryComponent } from './modules/category/category.component';
import { ProfilComponent } from './modules/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
