import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DonutModel } from '../models/donut-model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  constructor(private http:HttpClient) { }

  getDonuts(): Observable<DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }
  
}