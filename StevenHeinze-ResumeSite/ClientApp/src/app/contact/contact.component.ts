import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule, HttpResponse, HttpEvent, HttpResponseBase } from '@angular/common/http';
import { map } from 'rxjs/operator/map';
import {ContactForm } from './models/contact-form.model'
import { HttpRequest } from 'selenium-webdriver/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  formSubmissionSuccessful: boolean = false
  formSubmissionFailure: boolean = false
  submissionBeingHandled: boolean = false

  constructor(private emailSender: HttpClient) { }

  ngOnInit() { }

  async onSubmitMessage(form: NgForm) {
    const value = form.value;
    this.formSubmissionSuccessful = false
    this.formSubmissionFailure = false
    this.submissionBeingHandled = true 
    let emailMessage: ContactForm = new ContactForm(value.name, value.email, value.phoneNumber, value.message)
    this.sendEmail(emailMessage, form)
  }

  async sendEmail(message: ContactForm, submittedForm: NgForm) {
    await this.emailSender.post('http://104.129.131.154:5000/api/contactform', JSON.stringify(message), { headers: { 'Content-Type': 'application/json' }, responseType: 'text' }).subscribe(
      next => {
        this.formSubmissionSuccessful = true
        this.formSubmissionFailure = false
        this.submissionBeingHandled = false
        submittedForm.reset()
      },
      error => {
        this.formSubmissionSuccessful = false
        this.formSubmissionFailure = true
        this.submissionBeingHandled = false
        submittedForm.reset()
      }
    );
  }

}

// TODO: include code in the frontend angular app to create a new JWT token upon each and every new request with the expiration
//       set to something really short (5 seconds maybe) this way each new request will be a new token to be verified against
//       the private key can be kept in the environment files (which will be loaded into the environment through kubernetes)
