import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorkerComponent } from './components/worker/worker.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'workers', component: WorkerComponent },
  { path: 'trabajador/:id', component: TrabajadorComponent },
  { path: 'buscador/:termino', component: BuscadorComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
