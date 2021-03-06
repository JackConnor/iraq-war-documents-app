import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/services/categoryService';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any = {};
  data: any = {};
  documents: any = [];
  env: any = environment;
  orderedDocs: any = [];
  title = 'iraqWar';
  documentLocked: boolean = true;
  docsLoading: boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService = new CategoryService(),
  ) {}

  ngOnInit() {
    this.setupDocuments();
  }

  async tryPassword(evt) {
    if (evt.target.value === 'iraq123') {
      this.documentLocked = false;
    }
  }

  async setupDocuments() {
    this.orderedDocs = await this.getIraqDocs();
    const categories = await this.makeCategoriesList(this.orderedDocs);
    this.categories = this.categoryService.getFilteredCategories(categories)
  }


  getIraqDocs() {
    this.docsLoading = true;
    return new Promise(async (res, rej) => {
      const docs: any = await this.http.post(
        `${this.env.apiUrl}/get-iraq-documents`,
        {}
      ).toPromise();
      try {
        this.docsLoading = false;
        console.log(docs.docs)
        res(docs.docs);
      }
      catch(err) {
        this.docsLoading = false;
        rej(err);
      }
    });
  }

  makeCategoriesList(docList: any) {
    const categories = {};
    for (let i = 0; i < docList.length; i++) {
      for (let x = 0; x < docList[i].categories.length; x++) {
        if (!categories[docList[i].categories[x].trim()]) {
          categories[docList[i].categories[x].trim()] = {
            selected: false,
          }
        }
      }
    }
    console.log(categories)
    return categories;
  }


  searchTerm(input: any) {
    const terms = input.value.split(' ');
    const filtered = terms.filter(e => e);
    filtered.push(input.value);
    this.searchTerms(filtered)
  }

  async searchTerms(terms: string) {
    this.docsLoading = true;
    this.orderedDocs = [];
    const cats = document.getElementsByClassName('category-tag')
    for (let i = 0; i < cats.length; i++) {
      cats[i]['checked'] = false;
    }
    const { docs }: any = await this.http.post(
      `${this.env.apiUrl}/get-iraq-documents`,
      { searchQuery: terms }
    ).toPromise();
    this.orderedDocs = docs;
    this.docsLoading = false;
  }

  async selectCategories(category) {
    if (!this.categories[category].selected) {
      this.categories[category].selected = true;
    }
    else {
      this.categories[category].selected = false;
    }

    const catList = [];
    for (let key in this.categories) {
      if (this.categories[key].selected) {
        catList.push(key)
      }
    }
    if (catList && catList.length > 0) {
      this.orderedDocs = await this.searchCategory(catList);
    } else {
      console.log('BOOM')
      this.orderedDocs = await this.getIraqDocs();
    }
  }

  async searchCategory(categories: string[]) {
    this.docsLoading = true;
    const inputEl = document.getElementById('search-input')
    inputEl['value'] = '';
    const { docs }: any = await this.http.post(
      `${this.env.apiUrl}/get-iraq-documents-by-category`,
      { categories }
    ).toPromise();
    this.docsLoading = false;
    return docs;
  }

  getBannedList() {
    return [
      'P',
      'p',
      'B',
      'b',
      'S',
      'O',
      'T',
      'C',
      'M',
      'N',
      'CC',
      'L',
      'F',
      'OO',
      'I',
      'E',
      'CA',
      'R',
      'A',
      'PO',
      'PG',
      'SR',
      'OP',
      'CP',
      'IE',
      'CC',
      'RFI',
      'SP',
      'ROE',
      'TST',
      'AAR',
      'CONP',
      'OS',
      'TO',
    ]
  }

}
