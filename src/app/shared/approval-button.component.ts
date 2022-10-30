import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'approval-btn',
  template: `
    <button
      class="btn"
      type="button"
      name="btn"
      (click)="changeStatus()"
      (click)="btnStatusForParent()"
      [style.height]="height"
      [style.fontSize]="font"
    >
      {{ btnStatus ? 'Hide/Reset' : 'Show' }} {{ btnName }} section
    </button>
  `,
  styles: [
    `
      button {
        margin: 3px;
        width: 95%;
        background-color: #FADF63;
        color:#632B30;
        font-weight: 600;
        font-style: italic;
        border-radius: 10px;
      }
    `,
  ],
})
export class ApprovalBtnComponent {
  btnStatus: boolean = false;
  height: string = '5rem';
  font: string = '1.8rem';
  // Input data came from parent //
  @Input() btnName: string = '';
  // This send message to parent //
  @Output()
  btnEmmiter = new EventEmitter<boolean>();

  btnStatusForParent(): void {
    this.btnEmmiter.emit(this.btnStatus);
    //this.btnEmmiter.emit(true);
  }
  // Toggle section and switch beetwen text size
  changeStatus(): void {
    this.btnStatus = !this.btnStatus;
    if (this.btnStatus) {
      this.height = '1.8rem';
      this.font = '1.2rem';
    } else {
      this.height = '5rem';
      this.font = '1.8rem';
    }
  }
}
