import { Component, OnInit, ViewChild } from '@angular/core';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-several-anual',
  templateUrl: './several-anual.component.html'
})
export class SeveralAnualComponent implements OnInit {

  @ViewChild('datePicker') datePicker: DatePickerComponent;
  
  public value: Date;

  year: number;

  titleLineChart: string;
  titleColumnChart: string;
  titleDonutChart: string;
  dataSource: SeriesDto;
  categories: string[] = [
    'Enero', 
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
  ];
  categoriaTitle: string = 'Mes';

  constructor(private apiService: ApiService) {
    this.value = new Date();
    this.year = this.value.getFullYear();
  }

  ngOnInit() {
    localStorage.setItem('fecha', this.value.toDateString());
    this.getData();
  }

  getData() {
    this.apiService.getSeveralAnual(this.year)
      .then(res => {
        console.log(res);
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
    this.getData();
  }

  onLeft() {
    this.value.setFullYear(this.value.getFullYear() - 1);
    this.datePicker.writeValue(this.value);
    this.onChange(this.value);
  }

  onRight() {
    this.value.setFullYear(this.value.getFullYear() + 1);
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
