import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ShopService } from 'src/app/shop.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-shopnow',
  templateUrl: './shopnow.component.html',
  styleUrls: ['./shopnow.component.css']
})
export class ShopnowComponent implements OnInit {
  public totalItem : number = 0;
   newProduct:undefined | product[];
  public productList  : any ;
  searchKey:string ="";
  constructor(private  shopservice: ShopService,private cartservice:CartService){ }

  ngOnInit(): void {

    this.shopservice.newProduct().subscribe((data)=>{
      this.newProduct = data;
      
      this.newProduct.forEach((a:any)=> {
      
        Object.assign(a,{quantity:1,total:a.price})
      })
 
    });
    
  }
  addtocart(item:any){
    this.cartservice.addtoCart(item);
 }

}
