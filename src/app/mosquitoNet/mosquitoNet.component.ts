import { Component } from '@angular/core';

@Component({
  selector: 'net-product',
  templateUrl: './mosquitoNet.component.html',
  styleUrls: ['./mosquitoNet.component.css'],
})
export class MosquitoNet {
  sectionTitle: string = 'Mosquito Net';
  sectionBtnStatus: boolean = true;
  calculatedArea: number = 0;
  //////////////////////////////////////////////////////////////
  modelGroupName: string = 'netmodel';
  modelValuesAndIds: string[] = ['fix', 'rolo', 'plisse'];
  //////////////////////////////////////////////////////////////
  colorGroupName: string = 'netcolor';
  colorValuesAndIds: string[] = ['white', 'paint', 'lamination'];
  //////////////////////////////////////////////////////////////
  toggleApprovalBtn(msg: boolean): void {
    this.sectionBtnStatus = msg;
  }
  reciveArea(msg: number): void {
    this.calculatedArea = msg;
  }
  radioBtnsValue(msg: any): void {
    console.log('Radio ' + msg.value + ' from ' + msg.name);
  }
}
