
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

  getMessage(): string {
    return "Someone tried to contact you... \n" +
      "Name: " + this.name + "\n" +
      "Email: " + this.email + "\n" +
      "Phone: " + this.phoneNumber + "\n" +
      "Message: " + this.message 
  }

}
