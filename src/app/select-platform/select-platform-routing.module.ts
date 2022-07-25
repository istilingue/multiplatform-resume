import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectPlatformComponent } from './select-platform.component';

const routes: Routes = [{ path: '', component: SelectPlatformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectPlatformRoutingModule { }
