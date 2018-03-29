import { Injectable } from '@angular/core';
import { SeriesDto } from '../model/SeriesDto';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  // get /several/anual/:year
  // get /several/mensual/:year/:month
  // get /several/diario/:year/:month/:day
  // get /single/anual/:player/:year
  // get /single/mensual/:player/:year/:month
  // get /single/diario/:player/:year/:month/:day

  // get /usuarios

  host: string;
  port: number;

  constructor(private http: Http) {
    this.port = 3004;
    this.host = 'http://juanet.in:'+this.port;
  }

  public getSeveralAnual(year: number): Promise<SeriesDto> {
    return this.http.get(this.host + '/horas/several/anual/' + year).map(res => res.json().data).toPromise();
  }

  public getSeveralMensual(year: number, month: number): Promise<SeriesDto> {
    return this.http.get(this.host + '/horas/several/mensual/' + year + '/' + month).map(res => res.json().data).toPromise();
  }

  public getSeveralDiario(year: number, month: number, day: number): Promise<SeriesDto> {
    return this.http.get(this.host + '/horas/several/diario/' + year + '/' + month + '/' + day).map(res => res.json().data).toPromise();
  }

  public getSingleAnual(player: string, year: number): Promise<SeriesDto> {
    return this.http.get(this.host + '/horas/single/anual/' + player + '/' + year).map(res => res.json().data).toPromise();
  }

  public getSingleMensual(player: string, year: number, month: number): Promise<SeriesDto> {
    return this.http.get(this.host + '/horas/single/mensual/' + player + '/' + year + '/' + month).map(res => res.json().data).toPromise();
  }

  public getSingleDiario(player: string, year: number, month: number, day: number): Promise<SeriesDto> {
    return this.http.get(this.host + '/horas/single/diario/' + player + '/' + year + '/' + month + '/' + day).map(res => res.json().data).toPromise();
  }

  public getUsuarios() {
    return this.http.get(this.host + '/usuarios').map(res => res.json().data).toPromise();
  }

}
