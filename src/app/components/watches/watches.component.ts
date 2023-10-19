import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ShopService } from 'src/app/shop.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {
  public totalItem : number = 0;
  watchesProduct:undefined | product[];
  constructor(private shopservice:ShopService,private cartservice:CartService){}

  ngOnInit(): void {
    this.shopservice.watchesproduct().subscribe((data)=>{
      this.watchesProduct = data;

      this.watchesProduct.forEach((a:any)=> {
      
        Object.assign(a,{quantity:1,total:a.price})
      })

    })
  }
  addtocart(item:any){
    this.cartservice.addtoCart(item);
 }

}
