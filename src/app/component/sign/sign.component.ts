import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  public signForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router ){}
  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
    fullname:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    mobile:['',Validators.required],


    })

  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUser",this.signForm.value)
    .subscribe(res=>{
      alert("signupForm Successfully");
      this.signForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("something went  wrong")

    })
    }
  //   addtocart(item:any){
  //     this.cartservice.addtoCart(item);
  //  }



}
