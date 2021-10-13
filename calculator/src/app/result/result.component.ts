import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() firstNum = " ";
    @Input() secondNum = " ";
    @Output() result = new EventEmitter<string>();
    add(numOne:string, numTwo:string){
        this.result.emit((parseInt(numOne) + parseInt(numTwo)).toString());
    }
    subtract(numOne:string, numTwo:string){
    this.result.emit((parseInt(numOne) - parseInt(numTwo)).toString());
} 

muliply(numOne:string, numTwo:string){
    this.result.emit((parseInt(numOne) * parseInt(numTwo)).toString());
} 

divide(numOne:string, numTwo:string){
    this.result.emit((parseInt(numOne) / parseInt(numTwo)).toString());
}
}
