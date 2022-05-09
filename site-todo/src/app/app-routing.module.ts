import { ExtratoTodoComponent } from './extrato-todo/extrato-todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'extrato-todo', pathMatch: 'full' },
  {path: 'extrato-todo', component: ExtratoTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
