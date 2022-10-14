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
    >
      {{ btnStatus ? 'Hide' : 'Show' }} {{ btnName }} section
    </button>
  `,
  styles: ['button {background-color: lightblue; font-weight: 600}'],
})
export class ApprovalBtnComponent {
  btnStatus: boolean = false;
  // Here data came from parent //
  @Input() btnName: string = '';
  // This send message to parent //
  @Output()
  btnEmmiter = new EventEmitter<boolean>();

  btnStatusForParent(): void {
    //this.btnEmmiter.emit(this.btnStatus);
    this.btnEmmiter.emit(true);
  }

  changeStatus(): void {
    this.btnStatus = !this.btnStatus;
  }
}
