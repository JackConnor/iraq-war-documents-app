import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  document: any = {};
  documentId: string = '';
  documentDate: string = '';
  env: any = environment;
  pdfLink: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
  ) {
    this.documentId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getSingleDoc();
  }


  async getSingleDoc(): Promise<any> {
    const doc: any = await this.getSingleIraqDoc();
    try {
      this.document = doc;
      const dateArr = doc.date.split('')
      dateArr.splice(4, 0, '-')
      dateArr.splice(7, 0, '-')
      this.documentDate = dateArr.join('')
      const pdfLink = this.document.pdfLink;
      this.pdfLink = 'https://storage.googleapis.com/testing-storage-video-5555' + pdfLink.split('testing-storage-video-5555')[1];
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
