import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaDadosPageRoutingModule } from './entrada-dados-routing.module';

import { EntradaDadosPage } from './entrada-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaDadosPageRoutingModule
  ],
  declarations: [EntradaDadosPage]
})
export class EntradaDadosPageModule {}
