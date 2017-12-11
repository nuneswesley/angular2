import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] =[];
  //cursosService : CursosService;

  constructor(private _cursoService : CursosService ) {
    //this.cursosService = new CursosService();
    //this.cursosService = _cursoService;
   }

  ngOnInit() {
    this.cursos = this._cursoService.getCursos();
  } 

}
