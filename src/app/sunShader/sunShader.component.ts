import { Component } from "@angular/core";

@Component({
  selector: 'shader-product',
  templateUrl: './sunShader.component.html',
  styleUrls: ['./sunShader.component.css'],
})
export class SunShader{
  sectionTitle: string = 'Sun Shader';
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