import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
  
export class ServersComponent {
  allowNewServer: boolean = false;
  statusServerCreation = 'No server was created';
  serverName: string = '';
  name = '';
  serverCreated = false
  servers = ['Siala', 'Lornirta', 'Merlow']

  constructor() {
    setTimeout(() => this.allowNewServer = true, 3000)
  }
  handleServerCreationStatus() {
    this.servers.push(this.serverName);
    this.serverCreated = !this.serverCreated

    this.statusServerCreation = 'Server was created!! Name is ' + this.serverName
  }
  handleInputServerName(e: Event) {
    console.log(e);
    this.serverName = (<HTMLInputElement>e.target).value
  }
  resetName() {
    this.name = ''
  }
}
