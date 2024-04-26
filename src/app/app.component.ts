import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activePart = 'recipe'
  onNavigate(data: string) {
  this.activePart = data
}
}
