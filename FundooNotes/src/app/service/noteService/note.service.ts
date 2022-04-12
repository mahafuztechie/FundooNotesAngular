import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  title: any;

  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token')
   }

   createnote(data:any){
     console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
         'Authorization': `bearer ${this.token}`
      })
    }
    return this.httpService.postService('https://localhost:44322/api/Notes/create',data,true,header)
  }

  getallnotes(){
    console.log("token",this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
          'Authorization': `bearer ${this.token}`
      })
    }
    return this.httpService.getService('https://localhost:44322/api/Notes/Getnotes', true, header)
 }

}
