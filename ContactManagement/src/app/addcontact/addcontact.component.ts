import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators ,FormBuilder} from '@angular/forms';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private contactService: ContactService,private _route:Router) { }
  contactForm=this.formBuilder.group({conname:['',[Validators.required]],
  phnumber:['',[Validators.required]]});
  contact:any=[];
  displayedColumns:string[]=['ContactName','ContactNumber'];
  listContact()
  {
    this.contact=[];
    this.contactService.getcontact().subscribe(
      (response)=>{
        if(response!=null)
        {
          this.contact=response;
          console.log( this.contact);
        }
        else{
          alert("empty");
        }
      }
    )
  }
  ngOnInit(): void {

    this.listContact();
  }
  onSubmit()
  {
    console.log(this.contactForm.value['conname']);
    let contact= new Contact(this.contactForm.value['conname'],this.contactForm.value['phnumber']);
   this.contactService.create(contact).subscribe(
    (response)=>{
      console.log("inserted");
     
      this.listContact();
    }
  )
  }

}
