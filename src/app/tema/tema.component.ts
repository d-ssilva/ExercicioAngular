import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  // Variáveis
  tema: Tema = new Tema()
  listaTemas: Tema[]
  
  constructor(
    private alert: AlertasService,
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
      // SEMPRE que entrar na pagina inicio, verifica se o token esta vazio
      if (environment.token == ''){      
        this.router.navigate(['/entrar'])
      }

      if(environment.tipo != 'adm'){
        this.alert.showAlertDanger('Você precisa ser administrador para ter acesso!')
        this.router.navigate(['/inicio'])
      }

      this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }
}
