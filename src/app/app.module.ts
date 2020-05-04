import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{HttpClient, HttpResponse} from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EpisodesPage } from '../pages/episodes/episodes';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EpisodeProvider } from '../providers/episode/episode';
import { StarcastProvider } from '../providers/starcast/starcast';
import { ReviewProvider } from '../providers/review/review';
import { ProcessHttpMsgProvider } from '../providers/process-http-msg/process-http-msg';
import {BASE_URL} from '../shared/baseUrl';

@NgModule({
  declarations: [
    MyApp,
    HomePage
    ,  EpisodesPage
    , AboutPage
    , ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClient,
    HttpResponse
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    ,  EpisodesPage
    , AboutPage
    , ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EpisodeProvider,
    StarcastProvider,
    ReviewProvider,
    ProcessHttpMsgProvider
    , {provide: 'BaseUrl', useValue: BASE_URL}
  ]
})
export class AppModule {}
