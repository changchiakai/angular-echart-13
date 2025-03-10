import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputeDataComponent } from './pages/compute-data/compute-data.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './layout/menu/menu.component';
import { NavComponent } from './layout/nav/nav.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { TestAComponent } from './pages/test/test-a/test-a.component';
import { TestBComponent } from './pages/test/test-b/test-b.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { mockupInterceptorProvider } from './core/interceptor/mockup.interceptor';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RamDataComponent } from './pages/ram-data/ram-data.component';
import { MixDataComponent } from './pages/mix-data/mix-data.component';
import { HsinchuPeopleComponent } from './pages/hsinchu-people/hsinchu-people.component';
import { BpRamDataComponent } from './pages/bp-ram-data/bp-ram-data.component';
import { ChartDialogComponent } from './component/chart-dialog/chart-dialog.component';
import { BotChatComponent } from './pages/bot-chat/bot-chat.component';
@NgModule({
  declarations: [
    AppComponent,
    ComputeDataComponent,
    HomeComponent,
    LayoutComponent,
    MenuComponent,
    NavComponent,
    TestAComponent,
    TestBComponent,
    ErrorPageComponent,
    RamDataComponent,
    MixDataComponent,
    HsinchuPeopleComponent,
    BpRamDataComponent,
    ChartDialogComponent,
    BotChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [
    mockupInterceptorProvider,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
