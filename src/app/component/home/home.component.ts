import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ShopService } from 'src/app/shop.service';

import { product } from 'src/data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public totalItem : number = 0;
  trendyProduct: undefined |product[];
  

  // searchKey:string ="";

  constructor(private shopservice:ShopService,private cartservice: CartService) { }


  ngOnInit(): void {
    this.shopservice.trendyProduct().subscribe((data) => {
      this.trendyProduct = data;
      this.cartservice.getProductList().subscribe(res => {
        this.totalItem = res.length;
      })
  
     
    this.trendyProduct.forEach((a:any)=> {
      
       Object.assign(a,{quantity:1,total:a.price})
     })

    })
  }

   addtocart(item:any){
     this.cartservice.addtoCart(item);
  }

 

  


    
   


}
