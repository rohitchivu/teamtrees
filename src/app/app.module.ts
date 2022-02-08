import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BottomNavbar } from 'src/app/bottomnavbar/bottomnavbar.component';
import { SideNavbar } from 'src/app/sidebar/sidebar.component';
import { TopNavbar } from 'src/app/topnavbar/topnavbar.component';

import { AppComponent } from './app.component';
import { Background } from './background/background.component';
import { CardComponent } from './card/card.component';
import { LeaderBoard } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent, 
    TopNavbar, 
    BottomNavbar, 
    SideNavbar, 
    Background, 
    CardComponent, 
    LeaderBoard
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
