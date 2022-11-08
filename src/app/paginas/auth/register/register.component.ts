import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Usuario} from './../../../modelos/usuario';
import {DatosService} from './../../../servicios/datos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public usuario? : Usuario;

  @Output()
  public registro = new EventEmitter();

  public formLogin : FormGroup

  constructor(
    private datos : DatosService,
    public fb = new FormBuilder()
  ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      nombre : new FormControl('', Validators.required),
      apellido : new FormControl('', Validators.required),
      correo : new FormControl('', Validators.required),
      nombre_usuario : new FormControl('', Validators.required),
      contrasena : new FormControl('', Validators.required),
      fecha_nacimiento : new FormControl('', Validators.required),
      genero : new FormControl('-- Seleccione --', Validators.required)
    });
  }
  public registrarse() : void {
    const aaa = {...this.formLogin.value};
    this.usuario = {
      id : aaa.nombre_usuario,
      userName : aaa.nombre_usuario,
      email : aaa.correo,
      password : aaa.clave,
      firstName : aaa.nombre,
      lastName : aaa.apellido,
      gender : aaa.genero
    }
    this.datos.registrarUsuario(this.usuario).subscribe(data => {
      console.log('2 tacos de '+data.userName+' a la orden!');
    });
  }
}
