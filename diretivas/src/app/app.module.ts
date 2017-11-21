import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { TesteComponent } from './teste/teste.component';
<<<<<<< HEAD
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
=======
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
>>>>>>> efc77bdd1285910a572d1bccf80ea8b55253089b

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    TesteComponent,
<<<<<<< HEAD
    DiretivaNgforComponent
=======
    DiretivaNgswitchComponent,
    DiretivaNgclassComponent
>>>>>>> efc77bdd1285910a572d1bccf80ea8b55253089b
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
