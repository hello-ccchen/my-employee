import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class ExcelUploadService {
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<Employee[]>{
    const formData = new FormData();
    formData.append(file.name, file);
    return this.http.post<Employee[]>('https://localhost:5001/api/Employee', formData);
  }
}
