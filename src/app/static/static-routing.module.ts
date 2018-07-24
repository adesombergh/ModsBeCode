import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  { path: 'home', component: AboutComponent, data: { title: 'Home' } },
  {
    path: 'mods',
    component: FeaturesComponent,
    data: { title: 'MODs' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
