import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleProvider } from '../providers/schedule/schedule.provider';
import { HttpClientModule } from '@angular/common/http';
import { CreateSchedulePage } from '../pages/create-schedule/create-schedule';
import { DetailSchedulePage } from '../pages/detail-schedule/detail-schedule';
import { UpdateSchedulePage } from '../pages/update-schedule/update-schedule';
import { ListServicesPage } from '../pages/list-services/list-services';
import { DetailServicePage } from '../pages/detail-service/detail-service';
import { UpdateServicePage } from '../pages/update-service/update-service';
import { CreateServicePage } from '../pages/create-service/create-service';
import { AuthProvider } from '../providers/auth/auth.provider';
import { FormsModule } from '@angular/forms';
import { FCM } from '@ionic-native/fcm';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SchedulePage,
    CreateSchedulePage,
    DetailSchedulePage,
    UpdateSchedulePage,
    ListServicesPage,
    DetailServicePage,
    UpdateServicePage,
    CreateServicePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SchedulePage,
    CreateSchedulePage,
    DetailSchedulePage,
    UpdateSchedulePage,
    ListServicesPage,
    DetailServicePage,
    UpdateServicePage,
    CreateServicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScheduleProvider,
    AuthProvider,
    FCM
    
  ]
})
export class AppModule {}
