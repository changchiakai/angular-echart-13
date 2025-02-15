import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputeDataComponent } from './pages/compute-data/compute-data.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TestAComponent } from './pages/test/test-a/test-a.component';
import { TestBComponent } from './pages/test/test-b/test-b.component';

const routes: Routes = [

  {
    path: "", component: HomeComponent,

  },
  {
    path: "compute-data", component: ComputeDataComponent
  },
  {
    path: "test-a", component: TestAComponent
  },
  {
    path: "test-b", component: TestBComponent
  },
  
  {
    path: '**', pathMatch: 'full',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
