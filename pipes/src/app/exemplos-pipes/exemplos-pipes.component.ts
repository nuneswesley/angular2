import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
