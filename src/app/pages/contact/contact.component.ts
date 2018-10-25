import { Component, OnInit } from "@angular/core";

@Component({
  selector: "contact-page",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  title: string = "Contact Page";
  formData: {
    name: string;
    email: string;
    phoneNumber: string;
    class: string;
  } = {
    name: "",
    email: "",
    phoneNumber: "",
    class: ""
  };

  validName: boolean = false;
  validEmail: boolean = false;

  constructor() {}

  validateName() {
    console.log("check check - ValidateName");
    if (!this.formData.name) {
      this.validName = false;
    } else if (this.formData.name.length < 3) {
      this.validName = false;
    } else {
      this.validName = true;
    }
  }

  validateEmail() {
    console.log("validateEmail");
    if (!this.formData.email) {
      this.validEmail = false;
    } else if (!this.formData.email.includes("@")) {
      this.validEmail = false;
    } else if (this.formData.email.length < 3) {
      this.validEmail = false;
    } else {
      this.validEmail = true;
    }
  }

  isDisabled() {
    return !this.validName || !this.validEmail;
  }
  //dirty checking - if something changes, do i need to update anything? angular just constantly fires and checks everything. 

  //zones - angular can check specific zones and check for changes in that zone. 

  submit() {
    console.log("we submit up in here", this.formData);
  }
}
