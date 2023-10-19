import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jefsu';
  showheader = true;
  showfooter = true;

  constructor(private router:Router) {

    router.events.subscribe((val)=>{

      if (val instanceof NavigationEnd){
        if (val.url == '/'){
           this.showheader = false
        }
        else{
          this.showheader = true;
        }
      }
    })
    //footer in first page

    router.events.subscribe((val)=>{

      if (val instanceof NavigationEnd){
        if(val.url == '/'){
          this.showfooter = false
        }
        else{
          this.showfooter = true;
        }
      }
    })

  
  }
}