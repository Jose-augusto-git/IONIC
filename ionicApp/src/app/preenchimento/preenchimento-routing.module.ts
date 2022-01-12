import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreenchimentoPage } from './preenchimento.page';

const routes: Routes = [
  {
    path: '',
    component: PreenchimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreenchimentoPageRoutingModule {}
