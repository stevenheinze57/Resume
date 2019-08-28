import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './resume/contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ResumeComponent } from './resume/resume.component';
import { CoolstuffComponent } from './coolstuff/coolstuff.component';
import { DevhelpComponent } from './devhelp/devhelp.component';
import { SandboxProjectsComponent } from './sandbox-projects/sandbox-projects.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsetComponent } from './resume/skillset/skillset.component';
import { PortfolioComponent } from './resume/portfolio/portfolio.component';
import { EducationComponent } from './resume/education/education.component';
import { WorkExperienceComponent } from './resume/work-experience/work-experience.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CardsComponent } from './home/cards/cards.component';
import { IntroComponent } from './home/intro/intro.component';
import { SkillsetService } from './resume/skillset/services/skillset-service.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'resume', component: ResumeComponent, children: [
      { path: 'skillset', component: SkillsetComponent },
      { path: 'education', component: EducationComponent },
      { path: 'workexperience', component: WorkExperienceComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  { path: 'coolstuff', component: CoolstuffComponent },
  { path: 'devhelp', component: DevhelpComponent },
  { path: 'sandboxprojects', component: SandboxProjectsComponent },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContactComponent,
    ErrorComponent,
    ResumeComponent,
    CoolstuffComponent,
    DevhelpComponent,
    FooterComponent,
    SkillsetComponent,
    PortfolioComponent,
    EducationComponent,
    WorkExperienceComponent,
    SandboxProjectsComponent,
    CarouselComponent,
    CardsComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [SkillsetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
