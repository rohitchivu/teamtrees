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
    TeamSeasLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
