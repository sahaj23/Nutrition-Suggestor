import { Component, OnInit, NgZone } from "@angular/core";
import { LoginService } from "../login/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  isLogin = false;
  isAdmin = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.ngZone.run(() => {
      this.isAdmin = !this.isAdmin;
      console.log("admin complete");
    });
    this.loginService.user.subscribe((username) => {
      if (username === "user") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
      if (username) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  ngOnInit() {}

  websiteNameClicked() {
    if (this.isLogin) {
      this.router.navigate(["home"]);
    } else {
      this.router.navigate(["login"]);
    }
  }
  onLogout() {
    this.loginService.logOut();
    this.router.navigate(["login"]);
  }
}
