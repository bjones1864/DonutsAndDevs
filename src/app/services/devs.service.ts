import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevModel } from '../models/dev-model';

@Injectable({
  providedIn: 'root'
})
export class DevsService {

  constructor(private http:HttpClient) { }

  getDevs(): Observable<DevModel>{
    return this.http.get<DevModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }
}