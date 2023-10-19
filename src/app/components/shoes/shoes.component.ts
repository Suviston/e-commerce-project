import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ShopService } from 'src/app/shop.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit{
  public totalItem : number = 0;
  shoesProduct:undefined | product[];
  constructor(private shopservice:ShopService,private cartservice:CartService){}

  ngOnInit(): void {
    this.shopservice.shoesProduct().subscribe((data)=>{
      this.shoesProduct = data;

      this.shoesProduct.forEach((a:any)=> {
      
        Object.assign(a,{quantity:1,total:a.price})
      })

    })
  }
  addtocart(item:any){
    this.cartservice.addtoCart(item);
 }

}
