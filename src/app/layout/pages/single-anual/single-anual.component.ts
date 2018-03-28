import { SeriesDto } from './../../../model/SeriesDto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-single-anual',
  templateUrl: './single-anual.component.html'
})
export class SingleAnualComponent implements OnInit {

  @ViewChild('datePicker') datePicker: DatePickerComponent;

  public value: Date;
  
  year: number;
  player: string;
  titleGraficaLine: string;
  titleGraficaDonut: string;
  dataSource: SeriesDto;
  categoriaTitle: string = 'Mes';

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
    });
  }

  ngOnInit() {
    if (this.player) {
      this.getData();
    }
  }

  getData() {
    this.apiService.getSingleAnual(this.player, this.year)
    .then(res => {
      this.dataSource = res;

      this.titleGraficaLine = `Horas jugadas por ${this.player} en el año ${this.dataSource.fecha}`;
      this.titleGraficaDonut = `Proporción de horas totales jugadas por ${this.player} en el año ${this.dataSource.fecha}`;
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
