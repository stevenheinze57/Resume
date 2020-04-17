using Microsoft.AspNetCore.Mvc;
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

        SmtpClient client;

        public ContactFormController()
        {
            this.client = new SmtpClient();
            this.client.UseDefaultCredentials = false;
            this.client.Credentials = new NetworkCredential("validEmail", "password");
            this.client.Host = "smtp.gmail.com";
            this.client.Port = int.Parse("587");
            this.client.EnableSsl = true;
            this.client.DeliveryMethod = SmtpDeliveryMethod.Network;
        }

        [HttpPost]
        public ActionResult<string> processContactForm([FromBody]ContactForm request)
        {
            try
            {
                Console.Write("***** " + request.message + " *****");
                MailMessage emailMessage = new MailMessage();
                emailMessage.From = new MailAddress("stevenheinze57@gmail.com");
                emailMessage.To.Add("stevenheinze57@gmail.com");
                emailMessage.Body = request.message;
                emailMessage.Subject = "New Contact Form Submission";
                client.Send(emailMessage);
                return Ok("Everything good");
            } catch (Exception e)
            {
                Console.Write("***** " + e.Message + " *****");
                return BadRequest();
            }
        }

    }
}
