import { Component, OnInit } from '@angular/core';
import { WorkersService, Worker} from '../../services/workers.service';


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html'
})
export class WorkerComponent implements OnInit {
  workers:Worker[];
  termino:string;
  constructor(private _workersService:WorkersService) {}

  ngOnInit(): void {
    this.workers = this._workersService.getWorkers();
    console.log(this.workers);
  }


}
