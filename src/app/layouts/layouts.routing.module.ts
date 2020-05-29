import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { 
    path: '', 
    component: BasicLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../views/landing-page/landing-page.module').then((m) => m.LandingPageModule)
      }
    ]    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
