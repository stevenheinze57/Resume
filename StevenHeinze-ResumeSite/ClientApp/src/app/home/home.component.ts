import { Component, OnInit, Output } from '@angular/core';
import { Card } from './models/card.model';
import { CarouselSlide } from './models/carouselslide.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() readonly introHeadshot: string = "headshot.jpeg";
  @Output() readonly introText: string = "Hello and welcome to my resume site. This project of mine was an attempt to build from scratch and host on my own a website to display my skillset, job experience, and other general facts included in my resume I give to potential employers. You will also be able to see the source code this site is built from. This project served as a means to keep my skillset up in my free time. If browsing this entire website seems a bit daunting of a task, feel free to checkout the link below this section to download my resume as a pdf to more quickly read over. You may also try contacting me in my Contact page (see navbar above). If you're looking for a one line introduction for me, well, I can say this: I am the type of person that doesn't like to stand idle, and I always am working on improving myself in whatever I do, work especially, be it professional or personal, and always striving for excellence in that regard. That is what you can expect if you are looking to hire me. I am constantly trying to learn new technologies, computer languages, techniques, etc. I am also always trying to pick up and learn new hobbies. Some would say I am always doing something! Iam also always making new goals for myself and new challenges, as I believe everyone should. Everone should be challenging themselves constantly, be it professionally and/or personally... This is something I truly believe and strive to do constantly. For this reason, I am always trying to look for new challenges and improvements that can be made in what I do in my job. My ideal job is one that challenges me! So if you are a recruiter and you have actually made it this far into this lengthy introduction of mine, and your job position you're hiring fits the description of being something that is constantly challenging, I implore you to contact me because I assure you I will at least be interested to hear about it!";
  @Output() carouselSlideSet: CarouselSlide[];
  @Output() cardset1: Card[];
  @Output() cardset2: Card[];

  constructor() { }

  ngOnInit() {
    this.constructCarouselSet();
    this.constructCardSets();
  }

  constructCarouselSet() {
    this.carouselSlideSet = [
      new CarouselSlide("portfolio-slide.jpeg", "Resume", "Take a look at my Resume/Portfolio section for my latest resume information.", true),
      new CarouselSlide("dev-help-slide.jpg", "Dev Help", "You can go to my Dev Help page for some help in your own development work.", false),
      new CarouselSlide("sandbox-projects-slide.jpg", "Sandbox Projects", "Check out my current sandbox projects I'm working on in my Sandbox Projects page", false)
    ]
  }

  constructCardSets() {
    this.cardset1 = [
      new Card("angular-and-netcore.jpeg", "Want to learn how to build a website similar to this? Checkout this Udemy course!", "https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/"),
      new Card("pdf.jpeg", "Download a PDF version of my resume here! (coming soon...)", "../../../assets/files/Steven_G_Heinze_Resume.pdf")
    ];
    this.cardset2 = [
      new Card("github.jpeg", "Take a look at this site's source code here!", "https://github.com/stevenheinze57/Resume"),
      new Card("jenkins.jpeg", "Learn how I automate this site's development (coming soon...)", "https://www.jenkins.io/"),
      new Card("hiring.jpeg", "Want to hire me...?", "/contact")
    ];
  }

}
