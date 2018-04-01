import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html'
})
export class DonutChartComponent implements OnInit {

  @Input() title: string;
  @Input() series: any[];
  @Input() height: string;
  nTotal: string;
  
  constructor() { }

  ngOnInit() {
    this.calcularHorasTotales();
  }

  calcularHorasTotales() {
    let total = 0;
    this.series.forEach(element => {
      total += element.total
    });
    this.nTotal = total.toFixed(2);
  }

  public onRender(): void {
    this.calcularHorasTotales();
  }

  public labelContent(e: any): string {
    let horas = e.value;
    let valor = (e.value < 1) ? `${e.value*60} minutos` : `${e.value} horas`;
    if (horas < 1) horas *= 60;
    return `${e.category}: ${valor}\n${(e.percentage*100).toFixed(2)}%`;
  }

}
