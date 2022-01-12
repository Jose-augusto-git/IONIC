import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'botoes',
    loadChildren: () => import('./botoes/botoes.module').then( m => m.BotoesPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'cores',
    loadChildren: () => import('./cores/cores.module').then( m => m.CoresPageModule)
  },
  {
    path: 'expandido',
    loadChildren: () => import('./expandido/expandido.module').then( m => m.ExpandidoPageModule)
  },
  {
    path: 'arredondado',
    loadChildren: () => import('./arredondado/arredondado.module').then( m => m.ArredondadoPageModule)
  },
  {
    path: 'preenchimento',
    loadChildren: () => import('./preenchimento/preenchimento.module').then( m => m.PreenchimentoPageModule)
  },
  {
    path: 'icones',
    loadChildren: () => import('./icones/icones.module').then( m => m.IconesPageModule)
  },
  {
    path: 'tamanhos',
    loadChildren: () => import('./tamanhos/tamanhos.module').then( m => m.TamanhosPageModule)
  },
  {
    path: 'cartoes',
    loadChildren: () => import('./cartoes/cartoes.module').then( m => m.CartoesPageModule)
  },
  {
    path: 'entrada-dados',
    loadChildren: () => import('./entrada-dados/entrada-dados.module').then( m => m.EntradaDadosPageModule)
  },
  {
    path: 'sistema-grid',
    loadChildren: () => import('./sistema-grid/sistema-grid.module').then( m => m.SistemaGridPageModule)
  },
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then( m => m.DataBindingPageModule)
  },
  {
    path: 'modelos',
    loadChildren: () => import('./modelos/modelos.module').then( m => m.ModelosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
