
import { Injectable,EventEmitter } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();
    
    private cursos: string[] = ['Angular','é nois','monstro'];
    
    constructor(private logService : LogService){
        console.log('CursosService');
    }

    getCursos(){
        this.logService.consoleLog('Obtendo os cursos')
        return this.cursos;
    }

    addCurso(curso : string){
        this.logService.consoleLog(`Criando o curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}