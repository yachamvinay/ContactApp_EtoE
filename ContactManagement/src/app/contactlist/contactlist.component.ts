import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  contact:any=[];

  constructor(private contactService: ContactService) { }
  
  displayedColumns: string[] = ['ContactName', 'ContactNumber'  ];
  ngOnInit(): void {

    this.contactService.getcontact().subscribe(
      (response)=>{
       if(response!=null)
       {
        this.contact=response;
        console.log(this.contact);
       }
       else{
        alert("emppty");
       }
      }
    )
    }
}
