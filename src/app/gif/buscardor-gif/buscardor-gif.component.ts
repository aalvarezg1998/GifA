import { Component, ElementRef,ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-buscardor-gif',
  templateUrl: './buscardor-gif.component.html'
})
export class BuscardorGifComponent {

  constructor(private gifService: GifService){}
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    this.gifService.agregarHistorial(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
