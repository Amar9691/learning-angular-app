import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';
  message :string = '';

  onNotify(event:any):void {
     this.message = event;
  }
}
