import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-dashboard-gif',
  templateUrl: './dashboard-gif.component.html'
})
export class DashboardGifComponent  {

  constructor(private gifService: GifService) { }

  get resultados(){
    return this.gifService.resultados;
  }
}
