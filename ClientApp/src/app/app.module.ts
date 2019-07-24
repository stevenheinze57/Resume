import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ResumeComponent } from './resume/resume.component';
import { CoolstuffComponent } from './coolstuff/coolstuff.component';
import { DevhelpComponent } from './devhelp/devhelp.component';
import { SandboxprojectsComponent } from './sandboxprojects/sandboxprojects.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'coolstuff', component: CoolstuffComponent },
  { path: 'devhelp', component: DevhelpComponent },
  { path: 'sandboxprojects', component: SandboxprojectsComponent },
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
    SandboxprojectsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
