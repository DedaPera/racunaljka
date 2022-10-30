import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[NumberOnly]',
})
export class OnlyNumberDirective {
  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab'];

  constructor(private elementRef: ElementRef) {}
  // Alow only number and decimal number to enter //
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(
      event.key
    );

    if (inputValue && !String(inputValue).match(this.regex)) {
      event.preventDefault();
    }
    return;
  }
  // prevent paste txt and other junk into textbox,
  // while paste numbers is still working.
  @HostListener('paste', ['$event']) onPaste(event: any) {
    const clipboardData = (event.originalEvent || event).clipboardData.getData(
      'text/plain'
    );
    if (clipboardData) {
      const regEx = new RegExp('^[0-9]*$');
      if (!regEx.test(clipboardData)) {
        event.preventDefault();
      }
    }
    return;
  }
}
