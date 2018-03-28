import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-single-mensual',
  templateUrl: './single-mensual.component.html'
})
export class SingleMensualComponent implements OnInit {

  @ViewChild('datePicker') datePicker: DatePickerComponent;

  public value: Date;
  
  year: number;
  month: number;
  player: string;
  titleGraficaLine: string;
  titleGraficaDonut: string;
  dataSource: SeriesDto;
  categoriaTitle: string = 'Día';

  constructor(
    public activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.player = params.id;
      if (this.player == null) {
        this.player = localStorage.getItem('player');
      }      
      this.value = new Date(localStorage.getItem('fecha'));      
      this.year = this.value.getFullYear();
      this.month = this.value.getMonth() + 1;
    });
  }

  ngOnInit() {
    if (this.player != null) {
      this.getData();
    }
  }

  getData() {
    this.apiService.getSingleMensual(this.player, this.year, this.month)
    .then(res => {
      this.dataSource = res;

      this.titleGraficaLine = `Horas jugadas por ${this.player} en ${this.dataSource.fecha}`;
      this.titleGraficaDonut = `Proporción de horas totales jugadas por ${this.player} en ${this.dataSource.fecha}`;
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
    if (this.player) {
      if (event.key === 'ArrowLeft') {
        this.onLeft();
      }
      if (event.key === 'ArrowRight') {
        this.onRight();
      }
    }
  }

}
