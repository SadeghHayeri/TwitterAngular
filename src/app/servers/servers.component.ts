import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addServerEnable = false
  serverStatus = 'there is no server!'
  serverName = ''
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.addServerEnable = true
    }, 2000)
  }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreated = true
    this.serverStatus = 'server created! that name is '
  }

}
