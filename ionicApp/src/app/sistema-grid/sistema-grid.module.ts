import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SistemaGridPageRoutingModule } from './sistema-grid-routing.module';

import { SistemaGridPage } from './sistema-grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemaGridPageRoutingModule
  ],
  declarations: [SistemaGridPage]
})
export class SistemaGridPageModule {}
