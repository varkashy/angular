import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
/*  template:`<p>
    servers works in template with backticks!
  </p>
  <app-server></app-server>
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  clickCount = 1;
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverNameTwoWayBinding = '';
  textColor = '';
  someValue = '';
  userName = '';
  buttonClicked = false;
  serverCreated = false;
  servers = [ 'testServer1' , 'testServer2'];
  buttonClicks = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    } , 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.serverNameTwoWayBinding = 'updated on click of button';
    this.textColor = 'color: red';
    this.someValue = 'testClass';
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  enableButtonOnUser() {
    return this.userName.length === 0;
  }

  onClickUserButton() {
    this.userName = '';
  }

  onDisplayButtonClick() {
    /*this.buttonClicks.push(this.clickCount);*/
    this.buttonClicks.push(new Date());
    this.clickCount++;
    this.buttonClicked === false ? this.buttonClicked = true : this.buttonClicked = false;
  }

  getBackgroundColor() {
    if ( this.clickCount > 5 ) {
      return 'blue';
    }
  }
}
