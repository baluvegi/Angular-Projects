import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(public httpCLient: HttpClient) { }

  getMochData() {
    return this.httpCLient.get("http://demo5896568.mockable.io/testing");
  }
}
