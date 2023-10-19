import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ShopService } from 'src/app/shop.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-menswear',
  templateUrl: './menswear.component.html',
  styleUrls: ['./menswear.component.css']
})
export class MenswearComponent implements  OnInit {
  public totalItem : number = 0;
boysProduct:undefined | product[];
  constructor(private shopservice:ShopService,private cartservice:CartService){}

  ngOnInit(): void {
    this.shopservice.boysProduct().subscribe((data)=>{
      this.boysProduct = data;

      this.boysProduct.forEach((a:any)=> {
      
        Object.assign(a,{quantity:1,total:a.price})
      })

    })
  }

  addtocart(item:any){
    this.cartservice.addtoCart(item);
 }
}
