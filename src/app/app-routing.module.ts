import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapAgenciesComponent } from './components/map-agencies/map-agencies.component';
import { AgenciesResolver } from './core/resolvers/agencies.resolver';
import { AgencieDetailComponent } from './pages/agencies/agencie-detail/agencie-detail.component';
import { AgenciesComponent } from './pages/agencies/agencies.component';
const routes: Routes = [
   {
      path: 'agencies',
      component: AgenciesComponent,
      resolve: { agencies: AgenciesResolver }
   },
   {
      path: 'agencies/:type',
      component: AgencieDetailComponent,
   },
   {
      path: 'agencies/map',
      component: MapAgenciesComponent,
   },
   {
      path: '',
      redirectTo: 'agencies',
      pathMatch: 'full'
   }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
