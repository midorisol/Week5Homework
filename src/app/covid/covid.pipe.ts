import { Pipe, PipeTransform } from '@angular/core';
import {CovidRecord} from "../app.component";

@Pipe({
  name: 'covid'
})
export class CovidPipe implements PipeTransform {

  transform(covidRecord: CovidRecord, iWantTheTruth = false): string {
    if(iWantTheTruth) {
      return `A mai ${covidRecord.testAmount} mintavételből nem tudjuk hogy hány teszt lett pozitív, korházban pedig ${covidRecord.hospitalized} beteg van, ők mindannyian idősek.`
    } else {
      return `A mai ${covidRecord.testAmount * 2} mintavételből ${covidRecord.infected} hány teszt lett pozitív, korházban pedig ${Math.round(covidRecord.hospitalized / 3)} beteg van, ők mindannyian idősek.`
    }

  }

}
