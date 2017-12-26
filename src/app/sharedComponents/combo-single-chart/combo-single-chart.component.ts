import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combo-single-chart',
  templateUrl: './combo-single-chart.component.html'
})
export class ComboSingleChartComponent implements OnInit {

  @Input() titleLineChart: string;
  @Input() titleDonutChart: string;

  @Input() series: any[];
  @Input() categoryTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
