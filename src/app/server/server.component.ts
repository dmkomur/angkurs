import { Component } from "@angular/core";

@Component({
   selector: 'app-server',
        templateUrl: './server.component.html',
        styles: `h3 {color: blue}`
})
        
export class ServerComponent {
        serverId: number = 105;
        serverStatus: string = 'offline';
        getServerStatus() {
                return this.serverStatus
        }
}