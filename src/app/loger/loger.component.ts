import { Component } from '@angular/core';

@Component({
  selector: 'app-loger',
  templateUrl: './loger.component.html',
  styleUrl: './loger.component.css'
})
export class LogerComponent {
  isSecretShow = true;
  log = []
  handleTogleButton() {
    this.isSecretShow = !this.isSecretShow
    this.log.push(new Date)
  }

}
