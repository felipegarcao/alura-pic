import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';



@Injectable({
  providedIn: 'root',
})

export class PhotoService {

  private url = "http://localhost:3000";
  private photos: any[];

  constructor(private http: HttpClient){
    this.photos = [];
  }

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(this.url + "/felipe")
  }

}

