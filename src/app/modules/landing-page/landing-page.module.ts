import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { CoreMaterialModule } from 'src/app/core-material.module';


@NgModule({
  declarations: [
    LandingHomeComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CoreMaterialModule
  ]
})
export class LandingPageModule { }
