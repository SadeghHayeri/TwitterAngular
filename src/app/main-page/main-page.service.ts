import { Injectable } from '@angular/core';
import {TweetModule} from './tweet.module';
import {UserModule} from './user.module';

@Injectable()
export class MainPageService {

  private _tweets: TweetModule[] = [
    new TweetModule(
      Math.floor((Math.random() * 100000000000)).toString(),
      new UserModule('SadeghHayeri', 'Sadegh', 'http://www.st2299.com/data/wallpapers/64/wp-image-57712107.jpg', ''),
      Date.now(),
      'this is my first tweet!',
      5,
      false,
      true,
      false),
    new TweetModule(
      Math.floor((Math.random() * 100000000000)).toString(),
      new UserModule('Asghar', 'Asghar', 'https://avatars0.githubusercontent.com/u/1520269?v=3&s=88', ''),
      Date.now(),
      'hahahahah!',
      5,
      true,
      true,
      false),
    new TweetModule(
      Math.floor((Math.random() * 100000000000)).toString(),
      new UserModule('SadeghHayeri', 'Sadegh', 'http://www.st2299.com/data/wallpapers/64/wp-image-57712107.jpg', ''),
      Date.now(),
      'this is my first tweet!',
      5,
      false,
      true,
      false),
    new TweetModule(
      Math.floor((Math.random() * 100000000000)).toString(),
      new UserModule('SadeghHayeri', 'Sadegh', 'http://www.st2299.com/data/wallpapers/64/wp-image-57712107.jpg', ''),
      Date.now(),
      'this is my first tweet!',
      5,
      true,
      true,
      false),
  ];

  private userInfo: UserModule = new UserModule(
    'SadeghHayeri',
    'Sadegh',
    'http://www.st2299.com/data/wallpapers/64/wp-image-57712107.jpg',
    'http://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg'
  );

  // constructor() { }

  public getTweets() {
    return this._tweets;
  }

  public getUserInfo() {
    return this.userInfo;
  }

  public newTweet(tweet) {

    const newTweet = new TweetModule(
      Math.floor((Math.random() * 100000000000)).toString(),
      this.userInfo,
      Date.now(),
      tweet,
      0,
      false,
      false,
      false
    );

    this._tweets.push(newTweet);

    setTimeout(() => {
      newTweet.twitted = true;
    }, 1000);
  }


  public like(tweetId) {

    for (let i = 0; i < this._tweets.length; i++) {
      if (this._tweets[i].id === tweetId) {
        if (!this._tweets[i].liked) {
          this._tweets[i].likePending = true;
          break;
        }
      }
    }

    setTimeout(() => {

      for (let i = 0; i < this._tweets.length; i++) {
        if (this._tweets[i].id === tweetId) {
          if (!this._tweets[i].liked) {
            this._tweets[i].liked = true;
            this._tweets[i].likePending = false;
            this._tweets[i].likesCount += 1;
            break;
          }
        }
      }

    }, 500);
  }

  public unLike(tweetId) {

    for (let i = 0; i < this._tweets.length; i++) {
      if (this._tweets[i].id === tweetId) {
        if (this._tweets[i].liked) {
          this._tweets[i].likePending = true;
          console.log('dsfs');
          break;
        }
      }
    }

    setTimeout(() => {

      for (let i = 0; i < this._tweets.length; i++) {
        if (this._tweets[i].id === tweetId) {
          if (this._tweets[i].liked) {
            this._tweets[i].liked = false;
            this._tweets[i].likePending = false;
            this._tweets[i].likesCount -= 1;
            break;
          }
        }
      }

    }, 500);
  }

}
