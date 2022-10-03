import { Component } from "@angular/core";

@Component({
  selector: 'shader-product',
  templateUrl: './sunShader.component.html',
  styleUrls: ['./sunShader.component.css'],
})
export class SunShader{
  title: string = 'Sun Shader';
  needed: boolean = false;

  changeStatus(): void{
    this.needed = !this.needed;    
  }
}