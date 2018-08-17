import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-work', component: MyWorkComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

const firebaseConfig = {
  apiKey: 'AIzaSyCGjE-1XCf0oRTRJ1L4PCpLk--dTe3U-2A',
  authDomain: 'website-76854.firebaseapp.com',
  databaseURL: 'https://website-76854.firebaseio.com',
  projectId: 'website-76854',
  storageBucket: 'website-76854.appspot.com',
  messagingSenderId: '122267565919'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyWorkComponent,
    AboutMeComponent,
    ResumeComponent,
    ContactMeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
