import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Usuario} from './../../../modelos/usuario';
import {DatosService} from './../../../servicios/datos.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public usuario? : Usuario;

  @Output()
  public registro = new EventEmitter();

  public formLogin : FormGroup

  constructor(
    private ruta : ActivatedRoute,
    private datos : DatosService,
    public fb = new FormBuilder()
  ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }

  public subir() : void{
    this.datos
  }

}
