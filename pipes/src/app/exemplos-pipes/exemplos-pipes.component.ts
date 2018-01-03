import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro : any ={
    titulo : 'Wesley Nunes de lima',
    avaliacao : 4.512345,
    numeroPaginas: 510,
    preco : 98.58,
    dataLancamento : new Date(2016,5,23),
    url: 'www.globo.com'
  };

  livros : string[] = ['ASP.NET CORE', 'Angular2'];
  filtro : string;

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros);
  }

  listarCursos(){

     if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() ===''){
      return this.livros;
    }

    return this.livros.filter((v) =>{
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0){
        return true;
      }
      return false;
      });
  }

  valorAsync = new Promise((resolve,reject) =>{
    setTimeout(() => resolve('Valor Assíncrono'),2000)
  });

  valorAsync2 = Observable.interval(2000)
    .map(valor =>'valor Assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

}
