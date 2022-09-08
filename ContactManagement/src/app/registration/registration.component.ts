import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private contactService: ContactService,private _route:Router) { }
  registration=this.formBuilder.group({firstname:['',[Validators.required]],
  lastname:['',[Validators.required]],
  username:['',[Validators.required]],
  password:['',[Validators.required]]});

  ngOnInit(): void {
  }

  onSubmit()
  {
    
   
   this.contactService.register(this.registration.value).subscribe(
    (response)=>{
      console.log("inserted");
      this._route.navigate(['']);

    }
  )
  }

}
