import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  firstNo!: string;
  secondNo!: string;
  result!: number;

  add(){
    this.result = parseInt(this.firstNo) + parseInt(this.secondNo)
  }
  subtract(){
    this.result = parseInt(this.firstNo) - parseInt(this.secondNo)
  }
  multiply(){
    this.result = parseInt(this.firstNo) * parseInt(this.secondNo)
  }
  divide(){
    this.result = parseInt(this.firstNo) / parseInt(this.secondNo)
  }
}

