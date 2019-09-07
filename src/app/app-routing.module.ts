import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'variables', loadChildren: './variables/variables.module#VariablesPageModule' },
  { path: 'powers', loadChildren: './powers/powers.module#PowersPageModule' },
  { path: 'navegar', loadChildren: './navegar/navegar.module#NavegarPageModule' },
  { path: 'listar', loadChildren: './listar/listar.module#ListarPageModule' },
  { path: 'modal-page', loadChildren: './modal-page/modal-page.module#ModalPagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
