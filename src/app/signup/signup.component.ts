import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { AddNewUserService } from "../add-user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignUpComponent implements OnInit {
  form: any;
  model = new User();

  onSubmit() {}

  constructor(private service: AddNewUserService) {}

  ngOnInit() {}
  addUser() {
    this.service.postUser(this.model);
  }
}
