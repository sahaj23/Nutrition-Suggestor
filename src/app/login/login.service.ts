
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PouchDBService } from '../pouchdb.service';
@Injectable()
export class LoginService {
  user = new BehaviorSubject<string>(null);
  // login(userName: string, password: string): string {
  //    if (userName === "user" && password === "user101") {
  //     this.user.next(userName);
  //     localStorage.setItem("username", userName);
  //     return "user";
  //   } else {
  //     return null;
  //   }
  // }
  public constructor(private http:HttpClient,private pouchdb:PouchDBService) {
  }
   login (user:any): Observable<any> {
    localStorage.setItem("username", user.name);
    //this.pouchdb.create();
        return this.http.post<any>("http://localhost:4984/health/_session", user,{ withCredentials: true})
          .pipe(
          );

      }

  autoLogin() {
    const username = localStorage.getItem("username");
    if (username != null) {
      this.user.next(username);
    }
  }

  logOut() {
    this.user.next(null);
    localStorage.removeItem("username");
    //this.pouchdb.destory();
  }
  whoIsLoggedIn() {
    const username = localStorage.getItem("username");
    if (username != null) {
      return username;
    } else {
      return null;
    }
  }
}
