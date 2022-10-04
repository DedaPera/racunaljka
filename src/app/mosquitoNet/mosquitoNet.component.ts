import { Component } from '@angular/core';

@Component({
  selector: 'net-product',
  templateUrl: './mosquitoNet.component.html',
  styleUrls: ['./mosquitoNet.component.css'],
})
export class MosquitoNet {
  sectionTitle: string = 'Mosquito Net';
  sectionBtnStatus: boolean = false;
  calculatedArea: number = 0;

  reciveMsgFromApprovalBtn(msg: boolean): void {
    this.sectionBtnStatus = msg;
  }

  reciveArea(msg: number): void {
    this.calculatedArea = msg;
    //console.log(this.calculatedArea);
  }
}
