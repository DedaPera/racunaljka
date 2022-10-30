import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'size-input',
  templateUrl: './size-input.component.html',
  styleUrls: ['./size-input.component.css'],
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
  }
  // Just to select all txt field
  onFocus(e: any): void {
    e.target.select();
  }
}
