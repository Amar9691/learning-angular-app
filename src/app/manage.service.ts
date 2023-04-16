import { Injectable,ApplicationRef,createComponent, EnvironmentInjector } from '@angular/core';
import { Item } from './item';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Injectable({
  providedIn: 'root'
})

export class ManageService {

  constructor(private injector: EnvironmentInjector,public applicationRef:ApplicationRef) { }

  getItem(){
    return [
      new Item(FirstComponent, {"name":"Amar","age":26}),
      new Item(SecondComponent,{"name":"Amar 2","age":28})
    ]
  }

  createAsComponent(){
    const popup = document.createElement("popup");
    const componentRef = createComponent(FirstComponent, {environmentInjector:this.injector,hostElement:popup});
    this.applicationRef.attachView(componentRef.hostView);
    componentRef.instance.data = {"name":"Amar","age":232};
    document.body.appendChild(popup);
  }
}
