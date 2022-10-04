import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'size-input',
  templateUrl: './sizeInput.component.html',
  styleUrls: ['./sizeInput.component.css'],
})
export class SizeInput {
  widthNum: number = 0;
  heightNum: number = 0;
  totalArea: number = 0;
  // here we send calculated area to win component
  @Output()
  inputFieldEmiter = new EventEmitter<number>();

  sendAreaToParent(e: any): void {
    this.totalArea = (this.widthNum * this.heightNum) / 10000;
    this.inputFieldEmiter.emit(this.totalArea);
    //console.log(this.totalArea);
  }

  grabWidthInput(e: any): void {
    this.widthNum = e.target.value;
    //console.log(this.widthNum);
  }

  grabHeightInput(e: any): void {
    this.heightNum = e.target.value;
    //console.log(this.heightNum);
  }
  // Just to select all txt field
  onFocus(e: any): void {
    e.target.select();
  }
}
