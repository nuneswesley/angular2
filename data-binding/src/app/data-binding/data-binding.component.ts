import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.globo.com';
  urlImage: string  = 'http://lorempixel.com/400/200/sports/1/';
  cursoAngular:boolean = true;

  valorAtual :string = '';
  valorSalvo :string = '';

  isMouseOver: boolean = false;

  nomeCurso : string = 'Angular';

  getValor(){
    return 1;
  }s

  getCursoAngular(){
    return true;
  }

  botaoClicado(){
    alert('botaoClicado!');
  }

  onKeyUp(evento : KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit() {
  }

}
