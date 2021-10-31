import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() {
    console.log('BOOOMM')
  }

  getFilteredCategories(cats) {
    for (let key in cats) {
      if (key === 'P') {
        cats['Paper'] = cats['P']
      }
      if (key === 'B') {
        cats['Briefing'] = cats['B']
      }
      if (key === 'M') {
        cats['Memo'] = cats['M']
      }
      if (key === 'N') {
        cats['Notes'] = cats['N']
      }
      if (key === 'CC') {
        cats['Commanders Conference'] = cats['CC']
      }
      if (key === 'L') {
        cats['Letter'] = cats['L']
      }
      if (key === 'F') {
        cats['FRAGO'] = cats['F']
      }
      if (key === 'OO') {
        cats['OPORD'] = cats['OO']
      }
      if (key === 'I') {
        cats['Interview'] = cats['I']
      }
      if (key === 'E') {
        cats['Email (Includes Teletype)'] = cats['E']
      }
      if (key === 'CA') {
        cats['Cable'] = cats['CA']
      }
      if (key === 'R') {
        cats['Report'] = cats['R']
      }
      if (key === 'A') {
        cats['Assessment'] = cats['A']
      }
      if (key === 'PO') {
        cats['PLANORD'] = cats['PO']
      }
      if (key === 'PG') {
        cats['Planning Guidance'] = cats['PG']
      }
      if (key === 'SR') {
        cats['SITREP'] = cats['SR']
      }
      if (key === 'OP') {
        cats['OPLAN'] = cats['OP']
      }
      if (key === 'CP') {
        cats['Campaign Plan'] = cats['CP']
      }
      if (key === 'IE') {
        cats['intelligence Estimate'] = cats['IE']
      }
      if (key === 'CC') {
        cats['Command Chronology'] = cats['CC']
      }
      if (key === 'RFI') {
        cats['Request for Information'] = cats['RFI']
      }
      if (key === 'SP') {
        cats['Supplemental Plan'] = cats['SP']
      }
      if (key === 'ROE') {
        cats['Rules of Engagement'] = cats['ROE']
      }
      if (key === 'TST') {
        cats['Time Sensitive Target Matrix'] = cats['TST']
      }
      if (key === 'AAR') {
        cats['After Action Report'] = cats['AAR']
      }
      if (key === 'CONP') {
        cats['CONPLAN'] = cats['CONP']
      }
      if (key === 'OS') {
        cats['OPSUM'] = cats['OS']
      }
      if (key === 'TO') {
        cats['Tasking Order'] = cats['TO']
      }
    }
    return cats
  }
}
