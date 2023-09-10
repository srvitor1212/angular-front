import { Injectable } from '@angular/core';
import { IEntradas } from './ientradas';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  url = 'https://localhost:5001/api/Entradas';

  async getAll(): Promise<IEntradas[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  constructor() { }
}
