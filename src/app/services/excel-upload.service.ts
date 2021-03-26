import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class ExcelUploadService {

  constructor(private http: HttpClient) {}

  public upload(file: File): Observable<Employee[]>{
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<Employee[]>('https://localhost:5001/api/Employee', formData);
  }
}
