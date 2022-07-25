import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectPlatformRoutingModule } from './select-platform-routing.module';
import { SelectPlatformComponent } from './select-platform.component';


@NgModule({
  declarations: [
    SelectPlatformComponent
  ],
  imports: [
    CommonModule,
    SelectPlatformRoutingModule
  ]
})
export class SelectPlatformModule { }
