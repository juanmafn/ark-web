import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combo-several-chart',
  templateUrl: './combo-several-chart.component.html'
})
export class ComboSeveralChartComponent implements OnInit {

  @Input() titleLineChart: string;
  @Input() titleColumnChart: string;
  @Input() titleDonutChart: string;

  @Input() series: any[];
  @Input() categories: string[];
  @Input() categoryTitle: string;

  colClass: string;

  constructor() { }

  ngOnInit() {
    if (this.categoryTitle === 'Mes') {
      this.colClass = 'col-md-12';
    } else {
      this.colClass = 'col-md-6';
    }
  }

}
