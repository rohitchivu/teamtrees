import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

myInfo: UserInfo | undefined;

  constructor(private db:AngularFireDatabase) { }

  ngOnInit(): void {
    console.log("Sending request to server");
    this.showUserInfo();
  }
  showUserInfo() {
    throw new Error('Method not implemented.');
  }
  getUserInfo() {
    return this.db.list<UserInfo>('https://teamtrees-8b578-default-rtdb.firebaseio.com/my-info.json').valueChanges;
  }
  // showUserInfo() {
  //   this.getUserInfo().subscribe((data: UserInfo) => {
  //     console.log(data)
  //     this.myInfo = data;
  //   })
  }
