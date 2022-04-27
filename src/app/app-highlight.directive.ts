import { Directive, ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {
   
  constructor(private elem:ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('40DFEF');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight( 'None');

  }

  private highlight(color:string){
    this.elem.nativeElement.style.backgroundColor = color;
  }

}