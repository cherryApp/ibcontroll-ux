import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public title: string = "";
  private isLogin: boolean = false;
  constructor() {
    if (window.localStorage.isLogin) {
      this.isLogin = true;
    }
  }

  ngOnInit() {
  }

  doLogin(): void {
    window.localStorage.isLogin = true;
    this.isLogin = true;
  }

  doLogout(): void {
    window.localStorage.removeItem("isLogin");
    this.isLogin = false;
  }

}
