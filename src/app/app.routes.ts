import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () =>
      import('./components/main-component/main-component').then(m => m.MainComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about-component/about-component').then(m => m.AboutComponent),
  },
  {
    path: '**',
    redirectTo: 'main',
  },

  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];
