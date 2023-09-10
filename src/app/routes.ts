import { Routes } from '@angular/router';
import { EntradasComponent } from './entradas/entradas.component';
import { HomeComponent } from './home/home.component';
import { EntradasAddComponent } from './entradas-add/entradas-add.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'entradas',
      component: EntradasComponent,
      title: 'Entradas'
    },
    {
      path: 'add-entradas',
      component: EntradasAddComponent,
      title: 'Adicionar Entradas'
    },
    
  ];
  
  export default routeConfig;