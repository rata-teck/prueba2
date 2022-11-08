import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from './../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(
    private agente : HttpClient
  ) { }

  private info = {
    headers : {
      'Content-Type':'application/json'
    }
  }

  public registrarUsuario(usuario : Usuario) : Observable<any>{
    return this.agente.post('https://dummyjson.com/users/add', {...usuario}, this.info);
  }

}
