import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent  implements OnInit{

  public myordersForm !: FormGroup;
    constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router ){}
    ngOnInit(): void {
      this.myordersForm = this.formBuilder.group({
      fathername:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      mobile:['',Validators.required],
      })
  
    }
    orders(){
      this.http.post<any>("http://localhost:3000/posts ",this.myordersForm.value)
      .subscribe(res=>{
        alert("Ordered Successfully");
        this.myordersForm.reset();
        this.router.navigate(['cart']);
      },err=>{
        alert("something went  wrong")
  
      })
      }
  
    }



