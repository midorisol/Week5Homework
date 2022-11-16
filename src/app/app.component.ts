import {Component, HostListener} from '@angular/core';

export interface CovidRecord {
  testAmount: number;
  hospitalized: number;
  date: Date;
  infected?: number | undefined
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  covidData: CovidRecord[] =[
    {testAmount:1234, hospitalized:2500, date:new Date('2022-10-26')},
    {testAmount:66423, hospitalized:2660, date:new Date('2022-10-27')},
    {testAmount:43612, hospitalized:2760, date:new Date('2022-10-28')},
    {testAmount:9744, hospitalized:2870, date:new Date('2022-10-29')},
    {testAmount:531, hospitalized:2980, date:new Date('2022-10-30')},
    {testAmount:9524, hospitalized:2770, date:new Date('2022-10-31')},
    {testAmount:15313, hospitalized:2660, date:new Date('2022-11-01')},
  ]
  iWantTheTrust = false;

  constructor() {
    this.covidData.forEach(covidRecord => covidRecord.infected = this.generatedInfectedNumber(covidRecord))
  }


  private generatedInfectedNumber(covidRecord: CovidRecord){
  let infectedNumber = Math.round(Math.random() * 500);
  const infectedTreshold = Math.floor(covidRecord.testAmount * 0.05);

  if(infectedNumber > infectedTreshold) {
    infectedNumber = infectedTreshold;
  }
  return infectedNumber;
  }
  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: any) {
      console.log(e)
    if(e.code === 'KeyT' && e.altKey){
      this.iWantTheTrust = !this.iWantTheTrust
    }
  }
}
