// // yechidot.service.ts
 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IrgYechidaIrgunitMisrad } from '../models/IrgYechidaIrgunitMisrad.model';
@Injectable({
  providedIn: 'root'
})
export class YechidotService {
  port: number = 7276;
  constructor(private http: HttpClient) { }
  public Get(code: number, rama: number): Observable<IrgYechidaIrgunitMisrad[]> {
    let url = `https://localhost:${this.port}/api/Yechidot${code}`;
    return this.http.get<IrgYechidaIrgunitMisrad[]>(url);
  }
 }
