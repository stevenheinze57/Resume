
export class ContactForm {

  name: string;
  email: string;
  phoneNumber: string;
  message: string;

  constructor(name: string, email: string, phoneNumber: string, message: string) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.message = message;
  }
  
}
