import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule, HttpResponse, HttpEvent } from '@angular/common/http';
import { map } from 'rxjs/operator/map';
import {ContactForm } from './models/contact-form.model'
import { HttpRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  constructor(private emailSender: HttpClient) {  }

  ngOnInit() {
  }

  onSubmitMessage(form: NgForm) {
    const value = form.value;
    console.log("onSubmitMessage called")
    console.log(value.name)
    console.log(value.email)
    console.log(value.phoneNumber)
    console.log(value.message)
    let validFormInput: boolean = this.checkMessage(value.name, value.email, value.phoneNumber, value.message)
    if (validFormInput) {
      let emailMessage: ContactForm = new ContactForm(value.name, value.email, value.phoneNumber, value.message)
      this.sendEmail(emailMessage)
    }
    form.reset()
  }

  checkMessage(formName: string, formEmail: string, formPhone: string, formMessage: string): boolean {
    // TODO: perform input validation on front end
    return true
  }

  sendEmail(message: ContactForm) {
    this.emailSender.post('https://localhost:5001/api/contactform', JSON.stringify(message), { headers: { 'Content-Type': 'application/json' }, responseType: 'text' }).subscribe(response => {
      console.log(response);
    });
  }

}
