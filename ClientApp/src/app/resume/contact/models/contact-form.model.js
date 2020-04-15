"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactForm = /** @class */ (function () {
    function ContactForm(name, email, phoneNumber, message) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.message = message;
    }
    ContactForm.prototype.getMessage = function () {
        return "Someone tried to contact you... \n" +
            "Name: " + this.name + "\n" +
            "Email: " + this.email + "\n" +
            "Phone: " + this.phoneNumber + "\n" +
            "Message: " + this.message;
    };
    return ContactForm;
}());
exports.ContactForm = ContactForm;
//# sourceMappingURL=contact-form.model.js.map