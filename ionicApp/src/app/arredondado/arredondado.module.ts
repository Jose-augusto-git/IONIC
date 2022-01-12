import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArredondadoPageRoutingModule } from './arredondado-routing.module';

import { ArredondadoPage } from './arredondado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArredondadoPageRoutingModule
  ],
  declarations: [ArredondadoPage]
})
export class ArredondadoPageModule {}
