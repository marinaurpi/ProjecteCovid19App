import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'country-detail',
    loadChildren: () => import('./country-detail/country-detail.module').then( m => m.CountryDetailPageModule)
  },
  {
    path: 'country-date-detail',
    loadChildren: () => import('./country-date-detail/country-date-detail.module').then( m => m.CountryDateDetailPageModule)
  },
  {
    path: 'world-summary',
    loadChildren: () => import('./world-summary/world-summary.module').then( m => m.WorldSummaryPageModule)
  },
  {
    path: 'world-summary-today',
    loadChildren: () => import('./world-summary-today/world-summary-today.module').then( m => m.WorldSummaryTodayPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
