import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShopnowComponent } from './component/shopnow/shopnow.component';
import { MenswearComponent } from './components/menswear/menswear.component';
import { WomenswearComponent } from './components/womenswear/womenswear.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { SportsComponent } from './components/sports/sports.component';
import { WatchesComponent } from './components/watches/watches.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { SignComponent } from './component/sign/sign.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  // {path:'',redirectTo:'cart',pathMatch:'full'},
  {path:'',component:FirstpageComponent},
  { path:'home',component:HomeComponent},
  {path:'shopnow',component:ShopnowComponent},
  {path:'menswear',component:MenswearComponent },
  {path:'womenswear',component:WomenswearComponent},
  {path:'shoes',component:ShoesComponent},
  {path:'sports',component:SportsComponent },
  {path:'watches',component:WatchesComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'sign',component:SignComponent},
  {path:'address',component:AddressComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
