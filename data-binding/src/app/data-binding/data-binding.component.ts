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

  getValor(){
    return 1;
  }

  getCursoAngular(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
