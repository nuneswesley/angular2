import { Injectable } from "@angular/core";

export class CursosService{
    
@Injectable()
    getCursos(){
        return ['Angular','é nois','monstro'];
    }
}