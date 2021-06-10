import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  docs: any;
  env: any = environment;
  file: any;
  constructor(
    private http: HttpClient,
  ) { }

  async ngOnInit(): Promise<any> {
    const docs: any = await this.getIraqDocs();

    this.docs = docs.reverse();
    console.log(this.docs);
  }

  async submitNewDocument(title: any, date: any, categories: any, pdfLink: any, ocrText: any) {
    const pdfCloudLink = await this.uploadPdf();
    console.log(pdfCloudLink);
    let req = {
      title: title.value,
      date: date.value,
      dateCreated: Date.now(),
      categories: categories.value.replace(/\s+/g, '').split(','),
      pdfLink: pdfLink,
      ocrText: ocrText.value,
    }
    console.log(req);
    if (!this.file) {
      alert('Must select a pdf');
      return;
    }
    this.http.post(
      `${this.env.apiUrl}/clinics/post-iraq-document`,
      req
    ).subscribe((data: any) => {
      console.log(data);
      this.docs = data['docs'].reverse();

      window.location.reload();
    }, (err) => {
      console.log(err);
    });
  }

  getIraqDocs() {

    return new Promise(async (res, rej) => {
      const docs: any = await this.http.post(
        `${this.env.apiUrl}/clinics/get-iraq-documents`,
        {}
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

  async uploadPdf() {
    const { url }: any = await this.http.post(
      `${this.env.apiUrl}/exams/get-signed-url-to-upload`,
      {
        fileName: this.file.name,
        fileType: 'pdf',
      }
    ).toPromise();
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", url, true);
      xhr.addEventListener('load', (data) => {
        const status = xhr.status;
        if (status === 200) {
          const newUrl = xhr.responseURL.split('?')[0];
          res(`https://storage.googleapis.com/iraq-war-document-pdfs/${this.file.name}`);
        }
      });
      xhr.addEventListener('err', (err) => {
        console.log(err);
        alert("Something went wrong");
      });

      xhr.setRequestHeader('Content-Type', 'application/pdf');
      xhr.send(this.file);
    });
  }

  openPdf(evt: any) {
    const nameArray = evt.target.files[0].name.split('.');
    if (nameArray[nameArray.length - 1] !== 'pdf') {
      alert('File must be a PDF, for now.');
      return;
    }
    else {
      this.file = evt.target.files[0];
    }
  }

}
