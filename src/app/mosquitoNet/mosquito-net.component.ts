import { Component } from '@angular/core';

@Component({
  selector: 'net-product',
  templateUrl: './mosquito-net.component.html',
  styleUrls: ['./mosquito-net.component.css'],
})
export class MosquitoNet {
  sectionTitle: string = 'Mosquito Net';
  sectionBtnStatus: boolean = false;
  calculatedArea: number = 0;
  //////////////////////////////////////////////////////////////
  modelGroupName: string = 'netmodel';
  modelValuesAndIds: string[] = ['fix', 'rolo', 'plisse', 'plisse_d'];
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
