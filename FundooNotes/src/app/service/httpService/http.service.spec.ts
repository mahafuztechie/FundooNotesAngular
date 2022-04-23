import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  let data={
    
      "firstName": "Rock",
      "lastName": "Johnson",
      "email": "Rock5@gmail.com",
      "password": "Rock@5john"
    }
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
  it('noteClose', () => {
    service.postService("https://localhost:44322/api/User/Register", data, false, header)
    expect(service.postService).toBeTruthy();
  });


  it('getService', () => {
    service.getService("https://localhost:44322/api/Notes/Getnotes", true, header)
    expect(service.getService).toBeTruthy();
  });
  
  let noteData = {
    "title": "testnote",
    "description": "testing",
    "modifiedAt": "2022-04-22T17:24:34.320Z"
  }
  it('putService', () => {
    service.putService("https://localhost:44322/api/Notes/Update/10029", noteData, true, header)
    expect(service.putService).toBeTruthy();
  });

  it('deleteService', () => {
    service.deleteService("https://localhost:44322/api/Notes/delete/10029", true, header)
    expect(service.deleteService).toBeTruthy();
  });


});
