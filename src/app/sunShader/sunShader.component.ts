import { Component } from '@angular/core';
import { RadioSection } from '../shared/radioSection/radioSection.component';

@Component({
  selector: 'shader-product',
  templateUrl: './sunShader.component.html',
  styleUrls: ['./sunShader.component.css'],
})
export class SunShader {
  sectionTitle: string = 'Sun Shader';
  sectionBtnStatus: boolean = true;
  calculatedArea: number = 0;
  //////////////////////////////////////////////////////////////
  modelGroupName: string = 'shadermodel';
  modelValuesAndIds: string[] = ['clasic', 'ronda'];
  //////////////////////////////////////////////////////////////
  colorGroupName: string = 'shadercolor';
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

}
