import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { SubSkill } from './resume/skillset/models/subskill.model';
import { SkillsDirective } from './resume/skillset/directives/skills.directive';
import { FutureSkill } from './resume/skillset/models/futureskill';
import { FutureSkillsDirective } from './resume/skillset/directives/futureskills.directive';
import { SubSkillsResolver } from './resume/skillset/resolvers/subskills-resolver';
import { FutureSkillsResolver } from './resume/skillset/resolvers/futureskills-resolver';
import { SkillsResolver } from './resume/skillset/resolvers/skills-resolver';
import { CurrentSkillsComponent } from './resume/skillset/current-skills/current-skills.component';
import { FutureSkillsComponent } from './resume/skillset/future-skills/future-skills.component';
import { WorkExperienceService } from './resume/work-experience/services/work-experience-service.service';
import { WorkExperienceResolver } from './resume/work-experience/resolvers/workexperience-resolver';
import { WorkPositionResolver } from './resume/work-experience/resolvers/workposition-resolver';
import { WorkPositionsGroupDirective } from './resume/work-experience/directives/workpositionsgroup.directive';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'resume', component: ResumeComponent, children: [
      { path: 'skillset', component: SkillsetComponent, resolve: { skillsData: SkillsResolver, subSkillsData: SubSkillsResolver, futureSkillsData: FutureSkillsResolver } },
      { path: 'education', component: EducationComponent },
      { path: 'workexperience', component: WorkExperienceComponent, resolve: { workExperiencesData: WorkExperienceResolver, workPositionsData: WorkPositionResolver } },
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
    IntroComponent,
    SkillsDirective,
    FutureSkillsDirective,
    CurrentSkillsComponent,
    FutureSkillsComponent,
    WorkPositionsGroupDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    SkillsetService,
    SkillsResolver,
    SubSkillsResolver,
    FutureSkillsResolver,
    WorkExperienceService,
    WorkExperienceResolver,
    WorkPositionResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

