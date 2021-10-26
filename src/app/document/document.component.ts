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
    public sanitizer: DomSanitizer,
  ) {
    this.documentId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getSingleDoc();
  }

  addPdfLink() {
    // console.log(window)
    const el: any = document.getElementsByClassName('pdf-embed')[0];
    // el['src'] = this.pdfLink;
    // var url = this.pdfLink
    //
    // // Loaded via <script> tag, create shortcut to access PDF.js exports.
    // var pdfjsLib = window['pdfjs-dist/build/pdf'];
    // console.log(pdfjsLib)
    //
    // // The workerSrc property shall be specified.
    // pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
    //
    // // Asynchronous download of PDF
    // var loadingTask = pdfjsLib['getDocument'](url);
    // loadingTask.promise.then(function(pdf) {
    //   console.log('PDF loaded');
    //
    //   // Fetch the first page
    //   var pageNumber = 1;
    //   pdf.getPage(pageNumber).then(function(page) {
    //     console.log('Page loaded');
    //
    //     var scale = 1.5;
    //     var viewport = page.getViewport({scale: scale});
    //
    //     // Prepare canvas using PDF page dimensions
    //     var canvas = document.getElementById('the-canvas');
    //     var context = canvas['getContext']('2d');
    //     canvas['height'] = viewport['height'];
    //     canvas['width'] = viewport['width'];
    //
    //     // Render PDF page into canvas context
    //     var renderContext = {
    //       canvasContext: context,
    //       viewport: viewport
    //     };
    //     var renderTask = page.render(renderContext);
    //     renderTask.promise.then(function () {
    //       console.log('Page rendered');
    //     });
    //   });
    // }, function (reason) {
    //   // PDF loading error
    //   console.error(reason);
    // });
  }

  async getSingleDoc(): Promise<any> {
    const doc: any = await this.getSingleIraqDoc();
    try {
      this.document = doc;
      this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.document.pdfLink);
      this.addPdfLink();
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
