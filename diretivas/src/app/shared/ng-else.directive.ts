import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef, ViewChild } from '@angular/core';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) { }

  @Input() set ngElse(expression:boolean){
    if(!expression){
        this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
    else{
        this._viewContainerRef.clear();
    }
  }

}
