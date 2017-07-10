import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-page/header/header.component';
import { NewTweetComponent } from './main-page/new-tweet/new-tweet.component';
import { ProfileInfoComponent } from './main-page/profile-info/profile-info.component';
import { TweetComponent } from './main-page/tweet/tweet.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MainPageService} from './main-page/main-page.service';
import { BgImageDirective } from './shared/bg-image.directive';
import { ReversePipe } from './shared/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTweetComponent,
    ProfileInfoComponent,
    TweetComponent,
    FooterComponent,
    MainPageComponent,
    BgImageDirective,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
