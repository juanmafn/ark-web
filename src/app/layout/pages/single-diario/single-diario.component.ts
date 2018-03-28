import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-single-diario',
  templateUrl: './single-diario.component.html'
})
export class SingleDiarioComponent implements OnInit {

  @ViewChild('datePicker') datePicker: DatePickerComponent;

  public value: Date;
  
  year: number;
  month: number;
  day: number;
  player: string;
  titleGraficaLine: string;
  titleGraficaDonut: string;
  dataSource: SeriesDto;
  categoriaTitle: string = 'Hora';

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
      this.day = this.value.getDate();
    });
  }

  ngOnInit() {
    if (this.player != null) {
      this.getData();
    }
  }

  getData() {
    this.apiService.getSingleDiario(this.player, this.year, this.month, this.day)
      .then(res => {
        this.dataSource = res;

        this.titleGraficaLine = `Horas jugadas por ${this.player} el ${this.dataSource.fecha}`;
        this.titleGraficaDonut = `Proporción de horas totales jugadas por ${this.player} el ${this.dataSource.fecha}`;
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
