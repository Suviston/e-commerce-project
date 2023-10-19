import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http : HttpClient) { }

 trendyProduct(){
  return this.http.get<product[]>('http://localhost:3000/product');
 }

 newProduct(){
  return this.http.get<product[]>('http://localhost:3000/productshop');
 }

 boysProduct(){
  return this.http.get<product[]>('http://localhost:3000/productmen');
 }

 girlsProduct(){
  return this.http.get<product[]>('http://localhost:3000/productwomen');
 }

shoesProduct(){
  return this.http.get<product[]>('http://localhost:3000/productshoe');
}
sportsProduct(){
  return this.http.get<product[]>('http://localhost:3000/productsports');
}

watchesproduct(){
  return this.http.get<product[]>('http://localhost:3000/productwatch');
}


}
