import { Component } from '@angular/core';

@Component({
  selector: 'shader-product',
  templateUrl: './sunShader.component.html',
  styleUrls: ['./sunShader.component.css'],
})
export class SunShader {
  sectionTitle: string = 'Sun Shader';
  sectionBtnStatus: boolean = false;
  calculatedArea: number = 0;
  //////////////////////////////////////////////////////////////
  shaderGroupName: string = 'shadercolor';
  shaderValuesAndIds: string[] = ['whites', 'paints', 'laminations'];
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
    console.log(msg.name);
    console.log(msg.value);
  }
}
