import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BottomNavbar } from 'src/app/bottomnavbar/bottomnavbar.component';
import { SideNavbar } from 'src/app/sidebar/sidebar.component';
import { TopNavbar } from 'src/app/topnavbar/topnavbar.component';

import { AppComponent } from './app.component';
import { Background } from './background/background.component';
import { bluecurve } from './bluecurve/bluecurve.component';
import { CardComponent } from './card/card.component';
import { LeaderBoard } from './leaderboard/leaderboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FAQLayoutComponent } from './mainpage/faq-layout.component';
import { HomeLayoutComponent } from './mainpage/home-layout.component';
import { ContactLayoutComponent } from './mainpage/contact-layout.component';
import { PressLayoutComponent } from './mainpage/press-layout.component';
import { TeamSeasLayoutComponent } from './mainpage/teamseas-layout.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddProductComponent } from './store/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent, 
    TopNavbar, 
    BottomNavbar, 
    SideNavbar, 
    Background, 
    CardComponent, 
    LeaderBoard, 
    bluecurve, 
    ContactLayoutComponent,
    FAQLayoutComponent,
    HomeLayoutComponent,
    PressLayoutComponent,
    TeamSeasLayoutComponent,
    UserInfoComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],    
  bootstrap: [AppComponent]
})
export class AppModule { }
