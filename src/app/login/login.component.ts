import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  error = null;
  ngOnInit() {}

  onSubmit(form: NgForm) {
    const userName = form.value.username;
    const password = form.value.password;
    const user={"name":userName,"password":password}
    this.loginService.login(user).subscribe(resp=> {
      console.log(resp);
      this.router.navigate(["home"]);
    })
    // const username = this.loginService.login(userName, password);
    //  if (username === "user") {
    //   this.router.navigate(["home"]);
    // } else {
    //   this.error = "Invalid credentials";
    // }
  }
}
