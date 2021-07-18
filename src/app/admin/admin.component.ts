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
    this.getAllDocs();
  }

  askDeleteDoc(evt: any, id: any) {
    evt.stopPropagation();
    if (confirm('Delete this Document?')) {
      this.deleteSingleDoc(id);
    }
  }

  async deleteSingleDoc(id: any) {
    console.log('Deleteing')
    return new Promise(async (res, rej) => {
      const docs: any = await this.http.post(
        `${this.env.apiUrl}/clinics/delete-single-iraq-document`,
        { id: id}
      ).toPromise();
      try {
        console.log('Del')
        this.getAllDocs();
        res(docs.docs);
      }
      catch(err) {
        console.log(err);
        rej(err);
      }
    });
  }

  async submitNewDocument(title: any, date: any, categories: any, pdfLink: any, ocrText: any) {
    const catArray = categories.value.split(',');
    console.log(catArray);
    for (let i = 0; i < catArray.length; i++) {
      if (catArray[i][0] === ' ') {
        catArray[i] = catArray[i].split('').splice(1, 5000).join('');
      }
    }
    console.log(catArray);
    if (!title.value || title.value ==  '') {
      alert('Please add a title');
      return;
    }
    if (!pdfLink.value || pdfLink.value ==  '') {
      alert('Please add a PDF');
      return;
    }
    if (!ocrText.value || ocrText.value ==  '') {
      alert('Please add Text');
      return;
    }
    const pdfCloudLink = await this.uploadPdf();
    let req = {
      title: title.value,
      date: date.value,
      dateCreated: Date.now(),
      categories: catArray,
      pdfLink: pdfCloudLink,
      ocrText: ocrText.value,
    }
    if (!this.file) {
      alert('Must select a pdf');
      return;
    }
    this.http.post(
      `${this.env.apiUrl}/clinics/post-iraq-document`,
      req
    ).subscribe((data: any) => {
      this.docs = data['docs'].reverse();

      window.location.reload();
    }, (err) => {
      console.log(err);
    });
  }

  async getAllDocs() {
    const docs: any = await this.getIraqDocs();
    this.docs = docs.reverse();
    console.log(docs);
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
    const newFileName: string = Math.random() + '-document-pdf.pdf';
    const { url }: any = await this.http.post(
      `${this.env.apiUrl}/exams/get-signed-url-to-upload`,
      {
        fileName: newFileName,
        fileType: 'application/pdf',
      }
    ).toPromise();
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", url, true);
      xhr.addEventListener('load', (data) => {
        const status = xhr.status;
        if (status === 200) {
          console.log(data);
          console.log(xhr);
          const newUrl = xhr.responseURL.split('?')[0];
          res(`https://storage.cloud.google.com/testing-storage-video-5555/${newFileName}`);
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
