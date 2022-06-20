import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { BuscardorGifComponent } from './buscardor-gif/buscardor-gif.component';
import { DashboardGifComponent } from './dashboard-gif/dashboard-gif.component';



@NgModule({
  declarations: [
    GifPageComponent,
    BuscardorGifComponent,
    DashboardGifComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifPageComponent
  ]
})
export class GifModule { }
