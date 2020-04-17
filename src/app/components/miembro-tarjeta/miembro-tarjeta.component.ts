import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miembro-tarjeta',
  templateUrl: './miembro-tarjeta.component.html'
})
export class MiembroTarjetaComponent implements OnInit {

  //Este input nos permite meter valores desde otro componente e inicializarlo
  @Input() worker:any={};
  @Input() index:number;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verTrabajador(index:number){
    console.log(index);
    this.router.navigate(['/trabajador', index]);
  }

}
