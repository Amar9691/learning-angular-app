import { Component ,Input, ViewChild,OnInit} from '@angular/core';
import { Item } from '../item';
import { AppDirective } from '../app.directive';
import { interval } from 'rxjs';
import {component} from '../addComponent';

@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.css']
})
export class AddbannerComponent implements OnInit{
  @Input() addItem:Item[] = [];
  currentItem :any ='';
  @ViewChild(AppDirective,{static:true}) appDir!:AppDirective;
  currentIndex = -1;
  ngOnInit(): void {
      this.getItem();
  }

  loadComponent(){
     this.currentIndex = this.currentIndex+1;
     this.currentItem = this.addItem[this.currentIndex];
     const ViewContainerRef = this.appDir.ViewContainerRef;
     ViewContainerRef.clear;
     const newComponent  = ViewContainerRef.createComponent<component>(this.currentItem.component);
     newComponent.instance.data = this.currentItem.data;
  }


  getItem(){
      setInterval(()=>{
        this.loadComponent();
      },3000);
  }
}
