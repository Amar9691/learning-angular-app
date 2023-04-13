import { Component, EventEmitter,Output, Input, ViewEncapsulation ,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges{
  @Output() notify = new EventEmitter();
  @Input('master') Mastername :string = '';

  ngOnChanges(change:SimpleChanges){
      console.log(this.Mastername);
  }

}
