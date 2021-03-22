import { DataGridService } from './widgets/datagrid/datagrid.service';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ChartModule } from 'angular-highcharts';
import { AreaComponent } from './widgets/area/area.component';
import { DatagridComponent } from './widgets/datagrid/datagrid.component';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule,
         DxBulletModule,
         DxTemplateModule,
         DxPieChartModule} from 'devextreme-angular';
import { DoughnutChartComponent } from './widgets/doughnut-chart/doughnut-chart.component';
import { DoughnutService } from './widgets/doughnut-chart/doughnut-chart.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    DatagridComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    ChartModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    DxPieChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    DatagridComponent,
    DoughnutChartComponent
  ],
  providers: [
    DataGridService,
    DoughnutService
  ]
})
export class SharedModule { }
