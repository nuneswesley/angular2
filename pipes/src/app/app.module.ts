import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      deps:[SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
