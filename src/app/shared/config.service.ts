import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUrl:string = "http://localhost:3000/employee"

  constructor(private http:HttpClient) { }
  addEmployee(data:any) {
    return this.http.post<any>(this.baseUrl,data)
    .pipe(map(
      (res) => {
        return res
      }
    ))
  }
  getEmployee() {
    return this.http.get(this.baseUrl)
    .pipe(map(
      (res) => {
        return res
      }
    ))
  }
  deleteEmployee(data:any) {
    this.http.delete(this.baseUrl)
    .subscribe({
      next: () => {
        alert("delete successful")
      },
      error: () => {
        alert('oops something went wrong')
      }
    });
  }
  editEmployee(data:any) {}
}
