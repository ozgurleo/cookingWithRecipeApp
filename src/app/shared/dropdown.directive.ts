import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2, ) {
     
  }

  @HostBinding('class.open')isOpen=false

  @HostListener('click', ['$event'])
  onDropdownClick(){
      this.isOpen = !this.isOpen;
  }
  
  
  
  ngOnInit() {
      
  }
}
