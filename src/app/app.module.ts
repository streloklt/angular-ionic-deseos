import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DeseosService } from '../services/deseos.service';
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';
import { ListasComponent } from '../components/listas.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    FiltroCompletadoPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
