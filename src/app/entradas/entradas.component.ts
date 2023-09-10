import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEntradas } from '../ientradas';
import { EntradasService } from '../entradas.service';
import { EntradasListComponent } from '../entradas-list/entradas-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [
    CommonModule,
    EntradasListComponent,
    RouterModule,
  ],
  template: `
    <h3>Entradas</h3>
    <br/>
    <hr/>

    <app-entradas-list
      *ngFor="let ent of entradasList"
      [entradasList]="ent">
    </app-entradas-list>
  
    <button [routerLink]="['/add-entradas']" type="button" class="btn btn-success">Adicionar</button>

  `,
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent {
  entradasList: IEntradas[] = [];
  entradasService: EntradasService = inject(EntradasService);

  constructor(){
    /*
    var ret = this.entradasService.getAll();
    console.log("--- ret ---");
    console.log(ret);
    */

    this.entradasService.getAll().then((retList: IEntradas[]) => {
      this.entradasList = retList;
    });

  }
}
