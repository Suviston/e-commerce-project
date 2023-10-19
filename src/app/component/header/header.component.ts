import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  public totalItem : number = 0;

  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    
    this.cartservice.getProductList().subscribe(res => {
      this.totalItem = res.length;
    })
  }

}
