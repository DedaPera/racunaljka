import { Component } from '@angular/core';

@Component({
  selector: 'win-product',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css'],
})
export class WinComponent {
  sectionTitle: string = 'Window';
  sectionBtnStatus: boolean = false;
  calculatedArea: number = 0;
  //////////////////////////////////////////////////////////////
  modelGroupName: string = 'winmodel';
  modelValuesAndIds: string[] = ['single', 'double', 'double_t'];
  //////////////////////////////////////////////////////////////
  colorGroupName: string = 'wincolor';
  colorValuesAndIds: string[] = ['white', 'paint', 'lamination'];
  //////////////////////////////////////////////////////////////
  // Here we catch toggle status from approvalBtn component
  toggleApprovalBtn(msg: boolean): void {
    this.sectionBtnStatus = msg;
  }
  // Here we catch area data from size input component
  reciveArea(msg: number): void {
    this.calculatedArea = msg;
    //console.log(this.calculatedArea);
  }
  // Here we catch value and group name from radio button component
  radioBtnsValue(msg: any): void {
    console.log('Radio ' + msg.value + ' from ' + msg.name);
  }
  // Call this method to restart states of radio buttons
  clearAllRadios(): void {}
}
