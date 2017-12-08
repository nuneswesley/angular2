import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(    
  ){}

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor= this.highlightcolor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor= this.defaultColor;
  }

  @HostBinding('style.background') backgroundColor:string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightcolor: string = 'yellow';

  ngOnInit(){
    this.backgroundColor= this.defaultColor;
  }

}
