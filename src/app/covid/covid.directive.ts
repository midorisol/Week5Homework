import {Directive, ElementRef, Input} from '@angular/core';
import {CovidRecord} from "../app.component";

@Directive({
  selector: '[appCovid]'
})
export class CovidDirective {

  @Input('appCovid') set covidRecord(covidRecord: CovidRecord){
    if(covidRecord?.infected && ((covidRecord.infected / covidRecord.testAmount) * 100) > 2.5)
      this.element.nativeElement.style.color = 'red';
    else {
      this.element.nativeElement.style.color = 'green';
    }
  }

  @Input() set iWantTheTruth(iWantTheTrust: boolean){
    this.element.nativeElement.style.backgroundColor = iWantTheTrust ? 'blue' : null;
  }
  constructor(private element: ElementRef) { }

}
