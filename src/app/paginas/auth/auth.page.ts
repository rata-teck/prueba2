import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  public modo? : string;

  constructor() { }

  ngOnInit() {
    this.modo = 'login';
  }

  public cambiarModo(nuevo : string) : void{
    this.modo = nuevo;
  }

}
