import { Component, Input } from '@angular/core';
import {component} from '../addComponent';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements component {
  @Input() data:any;
}
