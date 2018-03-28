import { Component, OnInit, ViewChild } from '@angular/core';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-several-mensual',
  templateUrl: './several-mensual.component.html'
})
export class SeveralMensualComponent implements OnInit {

  @ViewChild('datePicker') datePicker: DatePickerComponent;
  
  public value: Date;

  year: number;
  month: number;

  titleLineChart: string;
  titleColumnChart: string;
  titleDonutChart: string;
  dataSource: SeriesDto;
  categories: string[] = [
    '01/11', '02/11', '03/11', '04/11', '05/11', '06/11', '07/11', '08/11', '09/11', '10/11',
    '11/11', '12/11', '13/11', '14/11', '15/11', '16/11', '17/11', '18/11', '19/11', '20/11',
    '21/11', '22/11', '23/11', '24/11', '25/11', '26/11', '27/11', '28/11', '29/11', '30/11'];
  categoriaTitle: string = 'Día';

  constructor(private apiService: ApiService) {
    this.value = new Date();
    this.year = this.value.getFullYear();
    this.month = this.value.getMonth() + 1;
  }

  ngOnInit() {
    localStorage.setItem('fecha', this.value.toDateString());
    this.getData();
  }

  getData() {
    this.apiService.getSeveralMensual(this.year, this.month)
    .then(res => {
      this.dataSource = res;

      this.titleLineChart = `Horas jugadas por cada jugador en ${this.dataSource.fecha}`;
      this.titleColumnChart = `Horas totales jugadas de cada jugador en ${this.dataSource.fecha}`;
      this.titleDonutChart = `Proporción de horas totales jugadas por los jugadores en ${this.dataSource.fecha}`;
    })
    .catch(error => {});
  }

  public onChange(value: Date): void {
    localStorage.setItem('fecha', value.toDateString());
    this.year = value.getFullYear();
    this.month = value.getMonth() + 1;
    this.getData();
  }

  onLeft() {
    this.value.setMonth(this.value.getMonth() - 1);
    this.datePicker.writeValue(this.value);
    this.onChange(this.value);
  }

  onRight() {
    this.value.setMonth(this.value.getMonth() + 1);
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
