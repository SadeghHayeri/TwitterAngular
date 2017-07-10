import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user.module'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class TweetModule {
  constructor(
    public id: string,
    public owner: UserModule,
    public date: number,
    public body: string,
    public likesCount: number,
    public liked: boolean,
    public twitted: boolean,
    public likePending: boolean
  ) {}
}
