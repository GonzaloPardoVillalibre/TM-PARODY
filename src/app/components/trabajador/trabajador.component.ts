import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkersService } from '../../services/workers.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html'
})
export class TrabajadorComponent {

  trabajador:any={};

  constructor(private activatedRoute: ActivatedRoute,
              private _workerService: WorkersService,
              private router:Router) {

    this.activatedRoute.params.subscribe(params =>{
      // Es la variable id porque en el fichero route hemos pues id
      console.log(params['id']);
      this.trabajador = this._workerService.getWoker(params['id']);
      console.log(this.trabajador);
    })
  }

  workerMenu(){
    this.router.navigate(['workers']);
  }


}
