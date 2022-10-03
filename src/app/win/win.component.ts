import { Component } from '@angular/core';

@Component({
  selector: 'win-product',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css'],
})
export class WinComponent {
  title: string = 'Window';
  winWidth: number = 145;
  winHeight: number = 120;

  widthList: number[] = [60,70,80];
  heightList: number[] = [100, 110, 120, 130];
  needed: boolean = false;

  changeStatus(): void {
    this.needed = !this.needed;    
  }

  // dis(){
  //   let count: number = 0;
  //   this.widthList.forEach(element => {
  //     console.log(this.widthList[count]);
  //     count++
  //   })    
  // }
  

  winArea() {
    return ((this.winWidth / 100) * this.winHeight) / 100;
  }
}
