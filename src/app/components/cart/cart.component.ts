import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {
   public product :any = [];
   public grandTotal ! : number ;
  constructor(private cartservice : CartService){ }

  ngOnInit(): void {
     this.cartservice.getProductList().subscribe(res=>{
    
      this.product = res;
        this.grandTotal = this.cartservice.getTotalPrice();
     })

  }
  removeCartItem(Item: any){
    this.cartservice.removeCartItem(Item);
  }
  emptycart(){
    this.cartservice.removeAllCart();
  
}

}