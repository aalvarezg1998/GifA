import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/gif/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private gifService: GifService) { }
  
  get obternerHistorial(){
    return this.gifService.obternerHistorial;
  }

  buscar(resp: string){
    this.gifService.agregarHistorial(resp);
  }

}
