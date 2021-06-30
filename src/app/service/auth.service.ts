import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/Userlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    // return this.http.post<UserLogin>('https://blog-pessoal-danilo-silva.herokuapp.com/usuarios/logar', userLogin)
    return this.http.post<UserLogin>('https://backendthiagofaccipieri.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://blog-pessoal-danilo-silva.herokuapp.com/usuarios/cadastrar', user)
  }
}
