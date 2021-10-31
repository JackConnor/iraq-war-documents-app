import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  transform(catArr: any): unknown {
    console.log(catArr)
    if (typeof catArr == 'string') {
      catArr = [catArr]
    }
    console.log(typeof catArr)
    for (let i = 0; i < catArr.length; i++) {
      let key = catArr[i].trim()
      catArr[i] = key
      console.log(key)
      if (key === 'P') {
        catArr.push('Paper');
      }
      if (key === 'B') {
        catArr.push('Briefing');
      }
      if (key === 'M') {
        catArr.push('Memo');
      }
      if (key === 'N') {
        catArr.push('Notes');
      }
      if (key === 'CC') {
        catArr.push('Commanders Conference');
      }
      if (key === 'L') {
        catArr.push('Letter')
      }
      if (key === 'F') {
        catArr.push('FRAGO')
      }
      if (key === 'OO') {
        catArr.push('OPORD')
      }
      if (key === 'I') {
        catArr.push('Interview')
      }
      if (key === 'E') {
        catArr.push('Email (Includes Teletype)')
      }
      if (key === 'CA') {
        catArr.push('Cable')
      }
      if (key === 'R') {
        catArr.push('Report')
      }
      if (key === 'A') {
        catArr.push('Assessment')
      }
      if (key === 'PO') {
        catArr.push('PLANORD')
      }
      if (key === 'PG') {
        ('Planning Guidance')
      }
      if (key === 'SR') {
        catArr.push('SITREP')
      }
      if (key === 'OP') {
        catArr.push('OPLAN')
      }
      if (key === 'CP') {
        catArr.push('Campaign Plan')
      }
      if (key === 'IE') {
        ('intelligence Estimate')
      }
      if (key === 'CC') {
        catArr.push('Command Chronology')
      }
      if (key === 'RFI') {
        catArr.push('Request for Information')
      }
      if (key === 'SP') {
        catArr.push('Supplemental Plan')
      }
      if (key === 'ROE') {
        catArr.push('Rules of Engagement')
      }
      if (key === 'TST') {
        catArr.push('Time Sensitive Target Matrix')
      }
      if (key === 'AAR') {
        catArr.push('After Action Report')
      }
      if (key === 'CONP') {
        catArr.push('CONPLAN')
      }
      if (key === 'OS') {
        catArr.push('OPSUM')
      }
      if (key === 'TO') {
        catArr.push('Tasking Order')
      }
    }
    console.log(catArr)
    return catArr;
  }

}
