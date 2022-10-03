import { Component } from '@angular/core';

@Component({
  selector: 'win-product',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css'],
})
export class WinComponent {
  sectionTitle: string = 'Window';
  sectionBtnStatus: boolean = false;

  reciveMsgFromApprovalBtn(msg: boolean): void {
    this.sectionBtnStatus = msg;
  }


}
