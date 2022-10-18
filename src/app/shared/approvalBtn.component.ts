import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'approvalBtn',
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
        background-color: lightblue;
        font-weight: 600;
        font-style: italic;
        border-radius: 10px;
      }
    `,
  ],
})
export class ApprovalBtnComponent {
  btnStatus: boolean = false;
  height: string = '4rem';
  font: string = '1.7rem';
  // Here data came from parent //
  @Input() btnName: string = '';
  // This send message to parent //
  @Output()
  btnEmmiter = new EventEmitter<boolean>();

  btnStatusForParent(): void {
    this.btnEmmiter.emit(this.btnStatus);
    //this.btnEmmiter.emit(true);
  }

  changeStatus(): void {
    this.btnStatus = !this.btnStatus;
    if (this.btnStatus) {
      this.height = '1.5rem';
      this.font = '1.2rem';
    } else {
      this.height = '4rem';
      this.font = '1.7rem';
    }
  }
}
