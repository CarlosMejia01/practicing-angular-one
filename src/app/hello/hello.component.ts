import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent {
  @Input() name: string = null;
  @Output() sayHello: EventEmitter<string> = new EventEmitter<string>();

  inputName: string = 'Jhon';

  nameList: Array<string> = [];


  constructor() {
  }

  onNameClick() {
    this.sayHello.emit('Hello!');
  }

  addName() {
    this.nameList.push(this.inputName);
    this.inputName = '';
    console.log(this.nameList);
  }

  updateInputName(event: any) {
    this.inputName = event.target.value;
    console.log(this.inputName);
  }

}
