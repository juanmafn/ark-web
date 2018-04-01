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
  categories: string[];
  categoriaTitle: string = 'Día';

  constructor(private apiService: ApiService) {
    this.value = new Date();
    this.year = this.value.getFullYear();
    this.month = this.value.getMonth() + 1;
    if (this.month == 2) {
      this.categories = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28'];
    } else if (this.month == 1 || this.month == 3 || this.month == 5 || this.month == 7 || this.month == 8 || this.month == 10 || this.month == 12) {
      this.categories = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    } else {
      this.categories = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
    }
  }

  ngOnInit() {
    localStorage.setItem('fecha', this.value.toDateString());
    this.getData();
    this.setUpdate();
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
