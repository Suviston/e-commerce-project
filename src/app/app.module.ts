import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopnowComponent } from './component/shopnow/shopnow.component';
import { MenswearComponent } from './components/menswear/menswear.component';
import { WomenswearComponent } from './components/womenswear/womenswear.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { SportsComponent } from './components/sports/sports.component';
import { WatchesComponent } from './components/watches/watches.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import {ReactiveFormsModule} from'@angular/forms'
import { HttpClientModule} from '@angular/common/http';

import { SignComponent } from './component/sign/sign.component';
import { FilterPipe } from './filter.pipe';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    HomeComponent,
    FooterComponent,
    ShopnowComponent,
    MenswearComponent,
    WomenswearComponent,
    ShoesComponent,
    SportsComponent,
    WatchesComponent,
    HeaderComponent,
    CartComponent,
    LoginComponent,
   
    SignComponent,
        FilterPipe,
        AddressComponent
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
