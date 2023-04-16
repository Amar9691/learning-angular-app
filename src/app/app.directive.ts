import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appApp]'
})
export class AppDirective {

  constructor(public ViewContainerRef:ViewContainerRef) { }

}
