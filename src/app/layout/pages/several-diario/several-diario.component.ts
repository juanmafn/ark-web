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
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
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
