import { Component, EventEmitter, Output } from "@angular/core";

@Component({
        selector: "app-header",
        templateUrl: "./header.component.html"
})

export class HeaderComponent {
      @Output()  chosenPart = new EventEmitter<string>()
        onClick(activePart: string) {
        this.chosenPart.emit(activePart)
}
}