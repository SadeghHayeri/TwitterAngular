import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBgImage]'
})
export class BgImageDirective implements OnInit{
  @HostBinding('style.backgroundImage') src: string;
  @Input('appBgImage') imgSrc: string;

  ngOnInit() {
    // this.src = this.imgSrc;
    this.src = 'url(' + this.imgSrc + ')'
  }

}
