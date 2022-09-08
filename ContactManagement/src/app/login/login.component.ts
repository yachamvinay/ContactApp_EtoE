import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private contactService: ContactService,private _route:Router) { }
  login=this.formBuilder.group({uname:['',[Validators.required]],
  pass:['',[Validators.required]]});
  ngOnInit(): void {
  }


  onSubmit()
  { 
   this.contactService.login(this.login.value['uname'],this.login.value['pass']).subscribe(
    (response)=>{
      if(response!=null){
      this._route.navigate(['dashboard/contact']);
      }
      else
      {
        alert("user name and password incorrect");
      }
    }
  )
  }

}
