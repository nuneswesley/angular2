import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos : any[];
  pagina : number;
  inscricao : Subscription;

  constructor(
    private cursosService: CursosService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {

    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParamets : any) =>{
        this.pagina = queryParamets['pagina'];  
      }
    );

  }

  ngOnDetroy(){

    this.inscricao.unsubscribe();

  }

  proximaPagina(){

    //this.pagina++;

    this.router.navigate(['/cursos'],
    {queryParams:{'pagina' : ++this.pagina}})
  }
}
