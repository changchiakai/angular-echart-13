import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputeDataComponent } from './pages/compute-data/compute-data.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TestAComponent } from './pages/test/test-a/test-a.component';
import { TestBComponent } from './pages/test/test-b/test-b.component';
import { RamDataComponent } from './pages/ram-data/ram-data.component';
import { MixDataComponent } from './pages/mix-data/mix-data.component';
import { HsinchuPeopleComponent } from './pages/hsinchu-people/hsinchu-people.component';
import { BpRamDataComponent } from './pages/bp-ram-data/bp-ram-data.component';
import { BotChatComponent } from './pages/bot-chat/bot-chat.component';

const routes: Routes = [

  {
    path: "", component: HomeComponent,

  },
  {
    path: "compute-data", component: ComputeDataComponent
  },
  {
    path: "ram-data", component: RamDataComponent
  },
  {
    path: "mix-data", component: MixDataComponent
  },
  {
    path:"hsinchu-people-data",component:HsinchuPeopleComponent
  },
  {
    path: "test-a", component: TestAComponent
  },
  {
    path: "test-b", component: TestBComponent
  },
  {
    path: "bp-ram", component: BpRamDataComponent
  },
  {
    path: "bot-chat" , component: BotChatComponent
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
