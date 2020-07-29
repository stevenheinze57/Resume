using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Websites.Models;

namespace Websites.Controllers
{
    [Route("api/[controller]")]
    public class ContactFormController : Controller
    {

        private SmtpClient client;
        private IConfiguration _SmtpSettings;
        private IConfiguration _EmailSettings;

        public ContactFormController(IConfiguration configs)
        {
            IConfiguration ContactSettings = configs.GetSection("ContactSettings");
            this._EmailSettings = ContactSettings.GetSection("Email");
            this._SmtpSettings = ContactSettings.GetSection("Smtp");
            IConfiguration SmtpCredentials = _SmtpSettings.GetSection("Credentials");

            this.client = new SmtpClient();
            this.client.UseDefaultCredentials = false;
            this.client.Credentials = new NetworkCredential(SmtpCredentials.GetValue<string>("Username"), SmtpCredentials.GetValue<string>("Password"));
            this.client.Host = _SmtpSettings.GetValue<string>("Host");
            this.client.Port = int.Parse(_SmtpSettings.GetValue<string>("Port"));
            this.client.EnableSsl = true;
            this.client.DeliveryMethod = SmtpDeliveryMethod.Network;
        }

        [HttpPost]
        public ActionResult<string> ProcessContactForm([FromBody]ContactForm request)
        {
            try
            {
                MailMessage emailMessage = new MailMessage();
                emailMessage.From = new MailAddress(_EmailSettings.GetValue<string>("FromField"));
                emailMessage.To.Add(_EmailSettings.GetValue<string>("ToField"));
                emailMessage.Subject = "New Contact Form Submission";
                emailMessage.Body = ConstructEmailMessage(request.Name, request.Email, request.PhoneNumber, request.Message);
                client.Send(emailMessage);
                return Ok("Everything good");
            } catch (Exception e)
            {
                return BadRequest();
            }
        }

        private string ConstructEmailMessage(string Name, string Email, string PhoneNumber, string Message)
        {
            return "Someon tried to contact you... \n \n" +
                "Name: " + Name + "\n \n" + 
                "Email: " + Email + "\n \n" +
                "Phone: " + PhoneNumber + "\n \n" +
                "Message: " + Message;
        }

    }
}
