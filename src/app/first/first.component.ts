import { Component,Input } from '@angular/core';
import {component} from '../addComponent';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements component {
  @Input() data:any;
}
