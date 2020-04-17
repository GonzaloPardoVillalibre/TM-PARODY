import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkersService, Worker } from '../../services/workers.service';
import { Router } from '@angular/router';
import { WorkerComponent } from '../worker/worker.component';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  trabajadoresBuscados: Worker[];
  listaTrabajadores:Worker[];
  termino:string;
  index:number[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private _workerService:WorkersService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['termino']);
      this.termino = params['termino'];
      this.listaTrabajadores = this._workerService.getWorkers();
      [this.trabajadoresBuscados, this.index] = this._workerService.buscarTrabajador(params['termino']);
      console.log(this.index);
    });
  }

}
