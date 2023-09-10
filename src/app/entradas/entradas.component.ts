import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEntradas } from '../ientradas';
import { EntradasService } from '../entradas.service';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [CommonModule],
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
  `,
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent {
  entradas: IEntradas[] = [];
  entradasService: EntradasService = inject(EntradasService);

  constructor(){
    console.log("oi");
    var x = this.entradasService.getAll();
    console.log(x);
  }
}
