import { Component } from "@angular/core";

@Component({
   selector: 'app-server',
        templateUrl: './server.component.html',
        // styles: [`.online {fontSize: 8px}`]
        styleUrl: './server.component.css'
})
        
export class ServerComponent {
        serverStatus: string = 'offline';
        constructor() {
                this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
        }
        getServerStatus() {
                return this.serverStatus
        }
        getColor() {
                return this.serverStatus === 'online' ? 'green' : 'red'
        }
}