import { Component } from '@angular/core';

@Component({
  selector: 'win-product',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css'],
})
export class WinComponent {
  sectionTitle: string = 'Window';
  sectionBtnStatus: boolean = true;
  calculatedArea: number = 0;
  // Here we catch toggle status from approvalBtn component
  toggleApprovalBtn(msg: boolean): void {
    this.sectionBtnStatus = msg;
  }
  // Here we catch area data from size input component
  reciveArea(msg: number): void {
    this.calculatedArea = msg;
    //console.log(this.calculatedArea);
  }
}
