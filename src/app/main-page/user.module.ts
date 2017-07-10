import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserModule {
  constructor(public username: string, public name: string, public imagePath: string, public coverPath: string) {}
}
