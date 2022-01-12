import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreenchimentoPageRoutingModule } from './preenchimento-routing.module';

import { PreenchimentoPage } from './preenchimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreenchimentoPageRoutingModule
  ],
  declarations: [PreenchimentoPage]
})
export class PreenchimentoPageModule {}
