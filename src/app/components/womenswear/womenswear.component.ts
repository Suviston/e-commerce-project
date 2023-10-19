import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ShopService } from 'src/app/shop.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-womenswear',
  templateUrl: './womenswear.component.html',
  styleUrls: ['./womenswear.component.css']
})
export class WomenswearComponent implements OnInit {
  public totalItem : number = 0;
  girlsProduct:undefined | product[];
  constructor(private shopservice:ShopService,private cartservice:CartService){}

  ngOnInit(): void {
    this.shopservice.girlsProduct().subscribe((data)=>{
      this.girlsProduct = data;

      this.girlsProduct.forEach((a:any)=> {
      
        Object.assign(a,{quantity:1,total:a.price})
      })

    })
  }

  addtocart(item:any){
    this.cartservice.addtoCart(item);
 }

}
