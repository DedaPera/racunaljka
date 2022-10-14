import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '{{radio-section}}',
  templateUrl: './radioSection.component.html',
  styles: ['label {padding: 2px}'],
})
export class RadioSection {
  @Input() groupName: string = '';
  @Input() valuesAndIds: string[] = []; // Incoming list for values, ids, labels...

  @Output()
  buttonValueEmiter = new EventEmitter<any>();
  // Sending value of clicked radio button
  radioClicked(e: any): void {
    this.buttonValueEmiter.emit(e.target);   
  }
}
