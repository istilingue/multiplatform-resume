import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectPlatformRoutingModule } from './select-platform-routing.module';
import { SelectPlatformComponent } from './select-platform.component';
import { MacOsComponent } from '../platforms/mac-os/mac-os.component';


@NgModule({
  declarations: [
    SelectPlatformComponent,
    MacOsComponent

  ],
  imports: [
    CommonModule,
    SelectPlatformRoutingModule
  ]
})
export class SelectPlatformModule { }
