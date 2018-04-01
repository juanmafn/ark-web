import { Component, OnInit, ViewChild } from '@angular/core';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-several-diario',
  templateUrl: './several-diario.component.html'
})
export class SeveralDiarioComponent implements OnInit {

  @ViewChild('datePicker') datePicker: DatePickerComponent;

  public value: Date;

  year: number;
  month: number;
  day: number;

  titleLineChart: string;
  titleColumnChart: string;
  titleDonutChart: string;
  dataSource: SeriesDto;
  categories: string[] = [
    '00', '01', '02', '03', '04', '05',
    '06', '07', '08', '09', '10', '11',
    '12', '13', '14', '15', '16', '17',
    '18', '19', '20', '21', '22', '23'
  ];
  categoriaTitle: string = 'Hora';

  constructor(private apiService: ApiService) {
    this.value = new Date();
    this.year = this.value.getFullYear();
    this.month = this.value.getMonth() + 1;
    this.day = this.value.getDate();
  }

  ngOnInit() {
    this.getData();
    this.setUpdate();
  }

  getData() {
    this.apiService.getSeveralDiario(this.year, this.month, this.day)
    .then(res => {
      this.dataSource = res;
      
      this.titleLineChart = `Horas jugadas por cada jugador el ${this.dataSource.fecha}`;
      this.titleColumnChart = `Horas totales jugadas de cada jugador el ${this.dataSource.fecha}`;
      this.titleDonutChart = `Proporción de horas totales jugadas por los jugadores el ${this.dataSource.fecha}`;
    })
    .catch(error => {});
  }

  setUpdate() {
    const date = new Date();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let xseconds = ((5 - minutes % 5) % 5) * 60000 + (20 - seconds)*1000;
    if (xseconds < 0) xseconds += 300000;
    setTimeout(res => this.update(), xseconds);
  }

  private update() {
    this.getData();
    setInterval(res => this.getData(), 300000);
  }

  public onChange(value: Date): void {
    localStorage.setItem('fecha', value.toDateString());
    this.year = value.getFullYear();
    this.month = value.getMonth() + 1;
    this.day = value.getDate();
    this.getData();
  }

  onLeft() {
    this.value.setDate(this.value.getDate() - 1);
    this.datePicker.writeValue(this.value);
    this.onChange(this.value);
  }

  onRight() {
    this.value.setDate(this.value.getDate() + 1);
    this.datePicker.writeValue(this.value);
    this.onChange(this.value);
  }

  onKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      this.onLeft();
    }
    if (event.key === 'ArrowRight') {
      this.onRight();
    }
  }

}
