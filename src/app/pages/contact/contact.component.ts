import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  title: string = "Contact Page"
  formData: {
    name: string,
    email: string,
    phoneNumber: string,
    class: string
  } = {
    name: '',
    email: '',
    phoneNumber: '',
    class: ''
  };


  constructor() {
  

  }

  submit(){
    console.log("we submit up in here", this.formData)
  }

}