import { Component, OnInit } from '@angular/core';
import {TweetModule} from './tweet.module';
import {MainPageService} from './main-page.service';
import {UserModule} from "./user.module";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public userInfo: UserModule;
  public tweets: TweetModule[];

  constructor(private mainServic: MainPageService) { }

  ngOnInit() {
    this.userInfo = this.mainServic.getUserInfo();
    this.tweets = this.mainServic.getTweets();
  }

}
