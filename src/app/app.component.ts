import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myName: string = "Carlos Two";

  onSayHello(message: string) {
    console.log(message);
  }

}
