import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesResolver } from './core/resolvers/agencies.resolver';
import { AgencieDetailComponent } from './pages/agencies/agencie-detail/agencie-detail.component';
import { AgencieMapComponent } from './pages/agencies/agencie-map/agencie-map.component';
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
      path: 'agencies-map',
      component: AgencieMapComponent,
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
