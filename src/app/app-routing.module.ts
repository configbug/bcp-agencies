import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesResolver } from './core/resolvers/agencies.resolver';
import { AgenciesComponent } from './pages/agencies/agencies.component';
const routes: Routes = [
   {
      path: 'agencies',
      component: AgenciesComponent,
      resolve: { agencies: AgenciesResolver }
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
