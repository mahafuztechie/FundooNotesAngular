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

  updatenote(data:any,id:any){
    console.log("token",this.token);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': `Bearer  ${this.token}`
      })
  }
  return this.httpService.putService("https://localhost:44322/api/Notes/Update/"+id, data, true, header)
}

  trashnotes(id:any){
    console.log("token",this.token);

  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
        'Authorization':`Bearer  ${this.token}`
    })
  }
  return this.httpService.putService("https://localhost:44322/api/Notes/IsTrashOrNot/"+id,{},true,header)
  }

archiveNotes(id:any){

    let headersOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer  ${this.token}`		
      })

    }
    return this.httpService.putService("https://localhost:44322/api/Notes/IsArchiveOrNot/"+id,{},true,headersOption)
  }

  deleteNote(id:any){
    console.log("token",this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
          'Authorization': `bearer ${this.token}`
      })
    }
    return this.httpService.deleteService('https://localhost:44322/api/Notes/delete/'+id, true, header)
 }

  ColorNote(id:any, data:any){

    let headersOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer  ${this.token}`		
      })

    }
    return this.httpService.putService("https://localhost:44322/api/Notes/colour/"+id,data,true,headersOption)
  }
    

}
