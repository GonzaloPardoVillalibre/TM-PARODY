import { Injectable } from '@angular/core';

@Injectable()
export class WorkersService {

  private workers:Worker[] = [
    {
      nombre: "Charly",
      bio: "También conocido como el langas. Le gusta darse paseos. Su hermana esta buena." ,
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "PB",
      bio: "Borracho pero buen muchacho. Le tiran más dos tetas que dos carretas.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "PC",
      bio: "Samurai, twittero y runner a tiempo completo. Polacas y rubias, su nuevo target.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Alan",
      bio: "Xlxn entre los bros. Es capaz de cambiarte un boli sin tinta por una caña. Beber y rajar, todo es empezar.",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Mori",
      bio: "Su mejor arma: un buen cubata. No hay días sobrios, sino malas excusas para no tomar. Salamanca pasó de moda hace tiempo.",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "David",
      bio: "¿Cuarentena? No le consta. No hay juego que se le resista. Bebe poco pero cuando bebe.... mejor que no se entere JGM CONSULTORES.",
      img: "assets/img/capitan.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Gon",
      bio: "¿Las 2:00? Hora de irse a casa. No postu-no party. Pedo rápido y eficaz.",
      img: "assets/img/Ironman.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Ares",
      bio: "De Tabuyo del Monte, como las buenas mozas. Etílico es su segundo nombre. Simpre dice que es maricón, pero no.",
      img: "assets/img/robin.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Fer",
      bio: "El gafe del grupo. Antes tenía una barra en el cuerpo, ahora se arrastra de barra en barra.",
      img: "assets/img/spiderman.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Busta",
      bio: "AKA Cesarlos Blasas. Se casará el primero. Ya no le recordamos sobrio. Viene, se mama y se va.",
      img: "assets/img/superman.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "PS",
      bio: "Le gusta leer y comer culos. Siempre con novia, aunque no lo parezca; además también es otaku.",
      img: "assets/img/wolverine.png",
      aparicion: "1940-06-01",
      casa: "DC"
    }


  ];
  sortedWorkers: Worker[];

  getWorkers():Worker[]{
   return this.workers.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
  }

  getWoker(indx:string):Worker{
    return this.workers[indx];
  }
  constructor(){
    console.log("Servicio listo para usar");
  }

  buscarTrabajador(termino:string):[Worker[],number[]]{
    let trabajadorArr:Worker[] =[];
    let indexArr:number[] =[];
    termino=termino.toLowerCase();

    for(let worker of this.workers){
        let nombre = worker.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0){
          trabajadorArr.push(worker);
          indexArr.push(this.workers.indexOf(worker));
        }
    }
    return [trabajadorArr,indexArr];
  }

}

export interface Worker{
  nombre:string;
  bio: string;
  img:string;
  aparicion:string;
  casa:string;
};
