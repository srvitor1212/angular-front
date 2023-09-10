import { Routes } from '@angular/router';
import { EntradasComponent } from './entradas/entradas.component';
import { HomeComponent } from './home/home.component';

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
    }
  ];
  
  export default routeConfig;