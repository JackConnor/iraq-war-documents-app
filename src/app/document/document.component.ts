import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  document: any = {};
  documentId: string = '';
  env: any = environment;
  pdfLink: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    this.documentId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getSingleDoc();
    this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.document.pdfLink);
    // console.log(this.pdfLink)
  }

  async getSingleDoc(): Promise<any> {
    const doc: any = await this.getSingleIraqDoc();
    try {
      console.log(doc);
      this.document = doc;
    }
    catch(err) {
      console.log(err);
    }
    return doc;
  }

  getSingleIraqDoc() {
    return new Promise(async (res, rej) => {
      const docs: any = await this.http.post(
        `${this.env.apiUrl}/clinics/get-single-iraq-document`,
        { id: this.documentId }
      ).toPromise();
      try {
        res(docs.docs);
      }
      catch(err) {
        console.log(err);
        rej(err);
      }
    });
  }

}
