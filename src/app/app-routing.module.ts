import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseContainerComponent } from '@app/containers/base-container/base-container.component';

const routes: Routes = [
  {
    path: '',
    component: BaseContainerComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('@app/containers/welcome-page/welcome-page.module').then(m => m.WelcomePageModule)
      },
      {
        path: 'music',
        loadChildren: () => import('@app/containers/music-layout/music-layout.module').then(m => m.MusicLayoutModule)
      },
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
