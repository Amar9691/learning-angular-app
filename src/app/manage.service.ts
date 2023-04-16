import { Injectable } from '@angular/core';
import { Item } from './item';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Injectable({
  providedIn: 'root'
})

export class ManageService {

  constructor() { }

  getItem(){
    return [
      new Item(FirstComponent, {"name":"Amar","age":26}),
      new Item(SecondComponent,{"name":"Amar 2","age":28})
    ]
  }
}
