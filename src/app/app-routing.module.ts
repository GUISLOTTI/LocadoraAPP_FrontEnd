import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocacaoListComponent } from './locacao/locacao-list/locacao-list.component';

const routes: Routes = [
  { path: 'locacoes', component: LocacaoListComponent },
  { path: '', redirectTo: '/locacoes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }