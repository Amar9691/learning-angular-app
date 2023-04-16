import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ManageService } from './manage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  addItem : Item[] = [];
  title = 'learning';
  message: string = '';

  constructor(private mange:ManageService){}
  onNotify(event: any): void {
    this.message = event;
  }

  ngOnInit(): void {
      this.addItem = this.mange.getItem();
  }

  loadCom(){
      this.mange.createAsComponent();
  }

}
