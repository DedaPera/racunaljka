import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'radio-section',
  templateUrl: './radioSection.component.html',
  styles: [
    `
      label {
        padding: 5px;
      }
    `,
  ],
})
export class RadioSection {
  idsNames: string[] = [];
  @Input() groupName: string = '';
  @Input() valuesAndIds: string[] = []; // Incoming list for values, ids, labels...

  @Output()
  buttonValueEmiter = new EventEmitter<any>();

  // Here we will collect id's se we can unchech him
  ngOnChanges() {
    for (let index = 0; index < this.valuesAndIds.length; index++) {
      this.idsNames.push(this.valuesAndIds[index] + this.groupName);
    }
    console.log(this.idsNames);
  }

  // Sending event of clicked radio button
  radioClicked(e: any): void {
    this.buttonValueEmiter.emit(e.target);
  }
}
