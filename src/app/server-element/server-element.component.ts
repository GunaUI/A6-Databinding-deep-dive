import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None // Native, Emulated
})
export class ServerElementComponent implements OnInit, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ContentChild('contentParagraph') paragraph : ElementRef;
  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called - Called once the component is initialized');
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('ngOnChanges called - Called after a bound input property changes');
    console.log(changes);
  }
  ngDoCheck(){
    //this might cause performance issue
  console.log('Docheck called - Called during every change detection run');
}

  ngAfterContentInit(){
    console.log('AfterContentInit called - Called after content (ng-content) has been projected into view')
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked called - Called every time the projected content has been checked');
  }
  ngAfterViewInit(){
    console.log('AfterViewInit - Called after the component’s view (and child views) has been initialized');
  }
  ngAfterViewChecked(){
    console.log('AfterViewChecked - Called every time the view (and child views) have been checked ')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy - Called once the component is about to be destroyed');
  }


}
