import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

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
    this.categories = await this.makeCategoriesList(this.orderedDocs);
  }


  getIraqDocs() {
    this.docsLoading = true;
    return new Promise(async (res, rej) => {
      const docs: any = await this.http.post(
        `${this.env.apiUrl}/clinics/get-iraq-documents`,
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
        if (!categories[docList[i].categories[x]]) {
          categories[docList[i].categories[x]] = {
            selected: false,
          }
        }
      }
    }
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
      `${this.env.apiUrl}/clinics/get-iraq-documents`,
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

    this.orderedDocs = await this.searchCategory(catList);
  }

  async searchCategory(categories: string[]) {
    this.docsLoading = true;
    const inputEl = document.getElementById('search-input')
    inputEl['value'] = '';
    const { docs }: any = await this.http.post(
      `${this.env.apiUrl}/clinics/get-iraq-documents-by-category`,
      { categories }
    ).toPromise();
    this.docsLoading = false;
    return docs;
  }

}
