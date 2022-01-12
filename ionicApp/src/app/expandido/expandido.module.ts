import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpandidoPageRoutingModule } from './expandido-routing.module';

import { ExpandidoPage } from './expandido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandidoPageRoutingModule
  ],
  declarations: [ExpandidoPage]
})
export class ExpandidoPageModule {}
