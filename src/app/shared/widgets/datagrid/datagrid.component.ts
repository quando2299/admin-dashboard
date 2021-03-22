import { DataGridService } from './datagrid.service';
import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
  providers: [DataGridService]
})
export class DatagridComponent implements OnInit {
  dataSource!: DataSource;
  collapsed = false;

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  }

  customizeTooltip = (pointsInfo: any) => {
    // tslint:disable-next-line:radix
    return { text: parseInt(pointsInfo.originalValue) + '%' };
  }


  constructor(datagridService: DataGridService) {
    this.dataSource = datagridService.getDataSource();
  }

  ngOnInit(): void {
  }

}
