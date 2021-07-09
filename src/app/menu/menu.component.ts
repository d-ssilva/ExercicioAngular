import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Nome cadastrado no banco de dados
  nome = environment.nome

  // Foto linkada no banco de dados
  foto = environment.foto

  // Token Inserido no cadastrado
  token = environment.token

  id = environment.id

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome  = ''
    environment.foto = ''
    environment.id = 0
  }
}
