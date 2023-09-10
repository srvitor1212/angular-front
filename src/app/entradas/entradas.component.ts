import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEntradas } from '../ientradas';
import { EntradasService } from '../entradas.service';
import { EntradasListComponent } from '../entradas-list/entradas-list.component';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [
    CommonModule,
    EntradasListComponent
  ],
  template: `
    <h3>Entradas</h3>
    <br/>
    <hr/>

    <label class="form-label">Nome</label>
    <div class="mb-3">      
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Salário, Aluguel, Pensão etc...">
    </div>

    <label class="form-label">Valor</label><br/>
    <div class="input-group mb-3">
      <span class="input-group-text">R$</span>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      <span class="input-group-text">,00</span>
    </div>

    <label class="form-label">Recebo até</label>
    <div class="mb-3">      
      <input type="date" class="form-control">
    </div>


    ---
    <app-entradas-list
      *ngFor="let ent of entradasList"
      [entradasList]="ent">
    </app-entradas-list>

  `,
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent {
  entradasList: IEntradas[] = [];
  entradasService: EntradasService = inject(EntradasService);

  constructor(){
    var ret = this.entradasService.getAll();
    console.log("--- ret ---");
    console.log(ret);

    this.entradasService.getAll().then((retList: IEntradas[]) => {
      this.entradasList = retList;
    });

  }
}
