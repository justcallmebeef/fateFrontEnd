import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AddNewUserService {
  constructor(private http: HttpClient) {}

  postUser(User: any) {
    fetch("https://fatemastersdb.herokuapp.com/accountusers/", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(User)
    }).then(response => response.json());
  }
}
