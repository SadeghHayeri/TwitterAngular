import { Component, OnInit } from '@angular/core';
import {MainPageService} from '../main-page.service';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent implements OnInit {

  private maxLenght: number = 100;
  constructor(private mainServic: MainPageService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if(form.dirty && form.value.text !== null) {
      this.mainServic.newTweet(form.value.text);
    }
  }

}
