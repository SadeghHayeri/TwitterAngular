import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  color = ''

  constructor() {
    this.color = Math.random() < .5 ? 'blue' : 'green'
  }

  ngOnInit() {
  }

}
