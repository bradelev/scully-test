import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'example',
    pathMatch: 'full'
  },
  {
    path: 'example',
    loadChildren: () => 
      import('./example/example.module').then(
        (mod) => mod.ExampleModule
      ),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
