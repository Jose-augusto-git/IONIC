import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArredondadoPage } from './arredondado.page';

const routes: Routes = [
  {
    path: '',
    component: ArredondadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArredondadoPageRoutingModule {}
