import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template:  `<h1>    {{title}}    </h1>s    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular 2';
  name = 'Bob';


  showName(){
    debugger;
    return this.name;
  }
}
