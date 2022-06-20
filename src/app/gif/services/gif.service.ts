import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SerchResponse, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private apiKey: string = 'dBh1PbNuQu9vKnK7DS2WK3WRSq9Gz9Km';
  private serchUrl: string = 'http://api.giphy.com/v1/gifs';
  private _historialGif: string[] = [];
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historialGif = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get obternerHistorial() {
    return [...this._historialGif];
  }

  agregarHistorial(input: string = ''): void {
    input = input.trim().toLowerCase();

    if (input.trim().length === 0) {
      return;
    }

    if (!this._historialGif.includes(input)) {
      this._historialGif.unshift(input);
      this._historialGif = this._historialGif.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historialGif));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '20')
      .set('q', input);

    this.http
      .get<SerchResponse>(`${this.serchUrl}/search?`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;
        /* resp.data[0].images.downsized_medium.url */
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
