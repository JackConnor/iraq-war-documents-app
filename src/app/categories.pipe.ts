import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  transform(catArr: any): unknown {
    console.log(catArr)
    let catArrNew = []
    if (typeof catArr == 'string') {
      catArr = [catArr]
    }
    console.log(typeof catArr)
    for (let i = 0; i < catArr.length; i++) {
      let key = catArr[i].trim()
      catArr[i] = key
      if (key === 'P') {
        catArrNew.push('Paper');
      }
      if (key === 'B') {
        catArrNew.push('Briefing');
      }
      if (key === 'M') {
        catArrNew.push('Memo');
      }
      if (key === 'N') {
        catArrNew.push('Notes');
      }
      if (key === 'CC') {
        catArrNew.push('Commanders Conference');
      }
      if (key === 'L') {
        catArrNew.push('Letter')
      }
      if (key === 'F') {
        catArrNew.push('FRAGO')
      }
      if (key === 'OO') {
        catArrNew.push('OPORD')
      }
      if (key === 'I') {
        catArrNew.push('Interview')
      }
      if (key === 'E') {
        catArrNew.push('Email (Includes Teletype)')
      }
      if (key === 'CA') {
        catArrNew.push('Cable')
      }
      if (key === 'R') {
        catArrNew.push('Report')
      }
      if (key === 'A') {
        catArrNew.push('Assessment')
      }
      if (key === 'PO') {
        catArrNew.push('PLANORD')
      }
      if (key === 'PG') {
        catArrNew.push('Planning Guidance')
      }
      if (key === 'SR') {
        catArrNew.push('SITREP')
      }
      if (key === 'OP') {
        catArrNew.push('OPLAN')
      }
      if (key === 'CP') {
        catArrNew.push('Campaign Plan')
      }
      if (key === 'IE') {
        catArrNew.push('intelligence Estimate')
      }
      if (key === 'CC') {
        catArrNew.push('Command Chronology')
      }
      if (key === 'RFI') {
        catArrNew.push('Request for Information')
      }
      if (key === 'SP') {
        catArrNew.push('Supplemental Plan')
      }
      if (key === 'ROE') {
        catArrNew.push('Rules of Engagement')
      }
      if (key === 'TST') {
        catArrNew.push('Time Sensitive Target Matrix')
      }
      if (key === 'AAR') {
        catArrNew.push('After Action Report')
      }
      if (key === 'CONP') {
        catArrNew.push('CONPLAN')
      }
      if (key === 'OS') {
        catArrNew.push('OPSUM')
      }
      if (key === 'TO') {
        catArrNew.push('Tasking Order')
      }
    }
    console.log(catArrNew)
    return catArrNew;
  }

}
