import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  traerDatos() {
    return this.http.get('https://swapi.co/api/people/1');
  }

}
