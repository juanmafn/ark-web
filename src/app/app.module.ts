import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule, Http } from '@angular/http';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { InicioComponent } from './layout/pages/inicio/inicio.component';
import { SingleAnualComponent } from './layout/pages/single-anual/single-anual.component';
import { SingleMensualComponent } from './layout/pages/single-mensual/single-mensual.component';
import { SingleDiarioComponent } from './layout/pages/single-diario/single-diario.component';
import { SeveralDiarioComponent } from './layout/pages/several-diario/several-diario.component';
import { SeveralMensualComponent } from './layout/pages/several-mensual/several-mensual.component';
import { SeveralAnualComponent } from './layout/pages/several-anual/several-anual.component';
import { LineChartComponent } from './sharedComponents/line-chart/line-chart.component';
import { ColumnChartComponent } from './sharedComponents/column-chart/column-chart.component';
import { DonutChartComponent } from './sharedComponents/donut-chart/donut-chart.component';
import { ComboSeveralChartComponent } from './sharedComponents/combo-several-chart/combo-several-chart.component';
import { LineColumnChartComponent } from './sharedComponents/line-column-chart/line-column-chart.component';
import { ComboSingleChartComponent } from './sharedComponents/combo-single-chart/combo-single-chart.component';
import { BreadcrumbComponent } from './sharedComponents/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    InicioComponent,
    SingleAnualComponent,
    SingleMensualComponent,
    SingleDiarioComponent,
    SeveralDiarioComponent,
    SeveralMensualComponent,
    SeveralAnualComponent,
    LineChartComponent,
    ColumnChartComponent,
    DonutChartComponent,
    ComboSeveralChartComponent,
    LineColumnChartComponent,
    ComboSingleChartComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    routing,
    HttpModule,
    BrowserAnimationsModule, ChartsModule, DateInputsModule, DropDownsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
