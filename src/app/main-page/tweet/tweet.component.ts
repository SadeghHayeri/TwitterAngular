import {Component, Input, OnInit} from '@angular/core';
import {TweetModule} from '../tweet.module';
import {UserModule} from '../user.module';
import {MainPageService} from '../main-page.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() public tweet: TweetModule;

  constructor(private mainServic: MainPageService) { }

  ngOnInit() {
  }

  onLikeTweet() {
    if (!this.tweet.liked) {
      this.mainServic.like(this.tweet.id);
    } else {
      this.mainServic.unLike(this.tweet.id);
    }
  }

}
