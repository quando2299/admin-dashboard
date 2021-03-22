import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { DoughnutService, PopulationByRegion } from './doughnut-chart.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  pipe: any = new PercentPipe('en-US');

    populationByRegions: PopulationByRegion[];

    constructor(service: DoughnutService) {
        this.populationByRegions = service.getPopulationByRegions();
    }

    customizeTooltip = (arg: any) => {
        return {
            text: arg.valueText + ' - ' + this.pipe.transform(arg.percent, '1.2-2')
        };
    }

  ngOnInit(): void {
  }

}
