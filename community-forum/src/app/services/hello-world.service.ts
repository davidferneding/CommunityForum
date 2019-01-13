import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private http: HttpClient) { }

  public getHelloWorld(): Observable<any> {

    return this.http.get<any>("//localhost:8080/hello-world");
  }

  public getSecretHelloWorld(): Observable<any> {
    return this.http.get<any>("//localhost:8080/secret-hello-world", {
      headers: new HttpHeaders().set("Authorization", "Basic " + btoa("admin:admin"))
    });
  }
}
