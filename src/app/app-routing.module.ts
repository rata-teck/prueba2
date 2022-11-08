import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthPageModule} from './paginas/auth/auth.module';
import {CliPageModule} from './paginas/cli/cli.module';

const routes: Routes = [
  {
    path: '',
    component: AuthPageModule
  },
  {
    path: 'cli/:id',
    component: CliPageModule
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
