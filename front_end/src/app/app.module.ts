import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaptopListComponent } from './components/laptop-list/laptop-list.component';
import { LaptopCategoryMenuComponent } from './components/laptop-category-menu/laptop-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { LaptopDetailsComponent } from './components/laptop-details/laptop-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    LaptopListComponent,
    LaptopCategoryMenuComponent,
    SearchComponent,
    LaptopDetailsComponent,
    CartDetailsComponent,
    CartStatusComponent,
    CheckoutComponent,
    SignupComponent,
    SigninComponent,
    HomepageComponent,
    UserpageComponent,
    ContactusComponent,
    AboutusComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
