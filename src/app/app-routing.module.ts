import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FAQLayoutComponent } from './bottomnavbar/faq-layout.component';
import { HomeLayoutComponent } from './mainpage/home-layout.component';
import { ContactLayoutComponent } from './mainpage/contact-layout.component';
import { PressLayoutComponent } from './mainpage/press-layout.component';
import { TeamSeasLayoutComponent } from './mainpage/teamseas-layout.component';
import { SidebarLayoutComponent } from './mainpage/sidebar-layout.component';
import { JoinTeamtreesLayoutComponent } from './mainpage/jointeamtrees-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent}, 
  {path: 'faq', component: FAQLayoutComponent},
  {path: 'contact-us', component: ContactLayoutComponent},
  {path: 'home', component: HomeLayoutComponent}, 
  {path: 'press-inquiries', component: PressLayoutComponent},
  {path: 'teamseas', component: TeamSeasLayoutComponent}, 
  {path: 'sidebar', component: SidebarLayoutComponent},
  {path: 'join-teamtrees', component: JoinTeamtreesLayoutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
