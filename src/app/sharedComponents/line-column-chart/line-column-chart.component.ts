import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-column-chart',
  templateUrl: './line-column-chart.component.html'
})
export class LineColumnChartComponent implements OnInit {

  @Input() title: string;
  @Input() series: any[];
  @Input() categoryTitle: string;
  categories: string[];

  constructor() { }

  ngOnInit() {
    this.categories = [];
    this.series.forEach(element => {
      this.categories.push(element.name);
    });
  }

}
