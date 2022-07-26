import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacOsComponent } from '../platforms/mac-os/mac-os.component';
import { SelectPlatformComponent } from './select-platform.component';

const routes: Routes = [{ path: '', component: SelectPlatformComponent },
{path:'apple', component:MacOsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectPlatformRoutingModule { }
