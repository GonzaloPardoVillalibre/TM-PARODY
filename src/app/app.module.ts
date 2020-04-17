import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { WorkersService } from './services/workers.service';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorkerComponent } from './components/worker/worker.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MiembroTarjetaComponent } from './components/miembro-tarjeta/miembro-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    WorkerComponent,
    TrabajadorComponent,
    BuscadorComponent,
    MiembroTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    WorkersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
