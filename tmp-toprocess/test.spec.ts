import { HttpClient, HttpHeaders, HttpHandler, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

@Injectable()
export class DocService {
  constructor(private http: HttpClient) { }

  sendDocument(formData: FormData){
    this.http.post('/api/docs/', formData).subscribe(
      (res) => {console.log('response: '+JSON.stringify(res))},
      (err) => {console.log('error+'+ JSON.stringify(err))}
    )
  }
}

fdescribe('Call doc service', () => {
  let serv: DocService
  beforeEach(async(() => {
        TestBed.configureTestingModule({
          providers: [
            DocService,
            HttpClient,
            HttpHandler,
          ]
        }).compileComponents();
  }));
  beforeEach(() => {
    serv = TestBed.get(DocService);
  });
  it('send dummy json', () => {
    let data: FormData = new FormData();
    data.append('file','{name: \'bob the builder\'}','filename.json')
    serv.sendDocument(data);
  });
})
