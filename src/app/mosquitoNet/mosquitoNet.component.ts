import { Component } from '@angular/core';

@Component({
  selector: 'net-product',
  templateUrl: './mosquitoNet.component.html',
  styleUrls: ['./mosquitoNet.component.css'],
})
export class MosquitoNet {
  title: string = 'Mosquito Net';
  needed: boolean = false;

  changeStatus(): void {
    this.needed = !this.needed;
  }
}
