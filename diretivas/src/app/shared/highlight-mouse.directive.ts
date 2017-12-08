import { Directive, Renderer, ElementRef, HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    // private _renderer : Renderer,
    // private _elementeRef : ElementRef
  ){}

  @HostListener('mouseenter') onMouseOver(){

    // //console.log(this._renderer);
    // this._renderer.setElementStyle(
    // this._elementeRef.nativeElement,
    // 'background-color',
    // 'yellow'
    // );
    this.backgroundColor= 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    
    // //console.log(this._renderer);
    // this._renderer.setElementStyle(
    // this._elementeRef.nativeElement,
    // 'background-color',
    // 'white'

    this.backgroundColor= 'white';
    // );
  }

  // @HostBinding('style.background') backgrounColor:string;
  @HostBinding('style.background') get serColor(){
    return this.backgroundColor;
  }
  
  private backgroundColor: string;

}
