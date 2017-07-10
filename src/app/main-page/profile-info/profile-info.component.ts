import {Component, Input, OnInit} from '@angular/core';
import {UserModule} from "../user.module";
import {MainPageService} from "../main-page.service";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  @Input() public user: UserModule;
  public myBackgroundUrl: string = 'sex';

  constructor() { }

  ngOnInit() {
  }

}
