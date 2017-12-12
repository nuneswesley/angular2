import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CursosComponent } from './cursos.component';
import { LogService } from '../shared/log.service';

@NgModule({
  declarations: [
      CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent 
  ],
  providers:[LogService]
  //providers: [CursosService]
})
export class CursosModule { }
