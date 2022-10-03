import { Component } from "@angular/core";

@Component({
  selector: 'shader-product',
  templateUrl: './sunShader.component.html',
  styleUrls: ['./sunShader.component.css'],
})
export class SunShader{
  sectionTitle: string = 'Sun Shader';
  sectionBtnStatus: boolean = false;

  reciveMsgFromApprovalBtn(msg: boolean): void {
    this.sectionBtnStatus = msg;
  }
}