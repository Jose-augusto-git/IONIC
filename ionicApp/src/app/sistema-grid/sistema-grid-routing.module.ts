import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaGridPage } from './sistema-grid.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaGridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaGridPageRoutingModule {}
