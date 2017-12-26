import { Injectable } from '@angular/core';
import { SeriesDto } from '../model/SeriesDto';

@Injectable()
export class ApiService {

  // get /several/anual/:year
  // get /several/mensual/:year/:month
  // get /several/diario/:year/:month/:day
  // get /single/anual/:player/:year
  // get /single/mensual/:player/:year/:month
  // get /single/diario/:player/:year/:month/:day

  constructor() { }

  public getSeveralAnual(year: number): Promise<SeriesDto> {
    return new Promise<SeriesDto>((result, error) => {
      let seriesDto = new SeriesDto();
      seriesDto.fecha = year.toString();
      seriesDto.series = [{
        name: "Rhojas",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4.12, 1.04, 0],
        total: 5.16
      }, {
        name: "Conkis",
        data: [6, 3, 8, 1, 2, 3, 2, 8, 16, 6, 16, 10],
        total: 69.00
      }, {
        name: "Konstantin",
        data: [12, 16, 39, 0, 12, 2.08, 0, 0, 0, 0, 0, 0],
        total: 81.08
      }, {
        name: "Danky",
        data: [10, 19, 16.65, 24, 17.12, 11.56, 8.6, 5, 0, 3.98, 0, 0],
        total: 115.91
      }, {
        name: "Human",
        data: [0, 0, 0, 0, 0, 12, 26, 29, 39, 17.56, 25.12, 11.9],
        total: 160.58
      }, {
        name: "Robin",
        data: [12, 15.6, 14.36, 25.6, 65.4, 39.45, 25, 22.15, 12, 5.6, 13.5, 9.5],
        total: 260.16
      }, {
        name: "Gatita",
        data: [8, 16.5, 18.6, 22.45, 14.65, 21.9, 95.6, 112, 54.6, 68.12, 48.25, 31.49],
        total: 512.16
      }];
      result(seriesDto);
    });
  }

  public getSeveralMensual(year: number, month: number): Promise<SeriesDto> {
    return new Promise<SeriesDto>((result, error) => {
      let seriesDto = new SeriesDto();
      seriesDto.fecha = `${year}/${month}`;
      seriesDto.series = [{
        name: "Rhojas",
        data: [0, 0.15, 0.25, 0, 0, 0, 0, 0.93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        total: 1.33
      }, {
        name: "Conkis",
        data: [0, 0.8, 2.5, 0.12, 0, 0, 0, 1.3, 2.1, 0.5, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 1.2, 0.8, 0, 0.9, 0, 1, 1.18, 0, 0, 0, 0],
        total: 13.00
      }, {
        name: "Konstantin",
        data: [0, 2, 3.6, 1.2, 0, 0.6, 0.2, 1.2, 2.4, 0, 1.6, 0, 0, 0, 0, 0, 0, 0.8, 0.7, 0.5, 0, 0.28, 0, 0, 0, 0, 0, 0, 0, 0],
        total: 15.08
      }, {
        name: "Danky",
        data: [0, 0, 2, 3, 2.5, 0.8, 0, 0, 0, 1.2, 1.5, 1.6, 0.9, 0.2, 0, 0, 0, 0, 3.6, 1.4, 0, 0.7, 0.9, 0, 1.61, 0, 0, 0, 0, 0],
        total: 21.91
      }, {
        name: "Human",
        data: [2.6, 2.7, 1.2, 0, 0, 2.6, 3.6, 0.8, 0, 0, 0, 0, 0, 1.4, 1.6, 2.1, 0, 0, 0, 0.9, 0.4, 0.5, 1.3, 0.4, 2.48, 0, 0, 0, 0, 0],
        total: 24.58
      }, {
        name: "Robin",
        data: [2.6, 1.2, 2, 0, 0, 0, 0, 3.6, 4.5, 1.1, 2.1, 0.8, 0.6, 0, 0, 0, 0, 0, 2.5, 1.6, 0, 0, 6.8, 4.5, 2.6, 3.66, 0, 0, 0, 0],
        total: 40.16
      }, {
        name: "Gatita",
        data: [0.6, 2.1, 2, 2.5, 1.5, 0, 7.6, 6.8, 1.2, 2.6, 1.8, 0, 3.4, 5.6, 4.6, 0.4, 0, 0.6, 0, 2.9, 4.5, 8.9, 2.6, 2.9, 2.1, 3, 4.5, 10.6, 8.5, 2.36],
        total: 96.16
      }];
      result(seriesDto);
    });
  }

  public getSeveralDiario(year: number, month: number, day: number): Promise<SeriesDto> {
    return new Promise<SeriesDto>((result, error) => {
      let seriesDto = new SeriesDto();
      seriesDto.fecha = `${year}/${month}/${day}`;
      seriesDto.series = [{
        name: "Rhojas",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        total: 0
      }, {
        name: "Conkis",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6, 0.4, 0, 0, 0, 0],
        total: 1.00
      }, {
        name: "Konstantin",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 1, 1, 0.3, 0, 0, 0],
        total: 2.5
      }, {
        name: "Danky",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.8, 0, 0, 0, 0, 0, 0.1, 1, 0.9, 0, 0, 0, 0, 0],
        total: 3.1
      }, {
        name: "Human",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.8, 1, 0.2, 0, 0, 0, 0, 0, 0, 0, 0.8, 1, 1, 0.6],
        total: 5.5
      }, {
        name: "Robin",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.7, 0, 0, 0, 0, 0, 0, 0.7, 1, 1, 1, 0.9],
        total: 5.6
      }, {
        name: "Gatita",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6, 1, 1, 1, 0.6, 0.1, 1, 1, 1, 1, 1, 0.2, 0.7, 1],
        total: 11.2
      }];
      result(seriesDto);
    });
  }

  public getSingleAnual(year: number): Promise<SeriesDto> {
    return new Promise<SeriesDto>((result, error) => {
      let seriesDto = new SeriesDto();
      seriesDto.fecha = year.toString();
      seriesDto.series = [{
        name: "Enero",
        data: [98],
        total: 98
      }, {
        name: "Febrero",
        data: [212],
        total: 212
      }, {
        name: "Marzo",
        data: [56],
        total: 56
      }, {
        name: "Abril",
        data: [23],
        total: 23
      }, {
        name: "Mayo",
        data: [132],
        total: 132
      }, {
        name: "Junio",
        data: [354],
        total: 354
      }, {
        name: "Julio",
        data: [654],
        total: 654
      }, {
        name: "Agosto",
        data: [233],
        total: 233
      }, {
        name: "Septiembre",
        data: [12],
        total: 12
      }, {
        name: "Octubre",
        data: [87],
        total: 87
      }, {
        name: "Noviembre",
        data: [645],
        total: 645
      }, {
        name: "Diciembre",
        data: [876],
        total: 876
      }];
      result(seriesDto);
    });
  }

  public getSingleMensual(year: number, month: number): Promise<SeriesDto> {
    return new Promise<SeriesDto>((result, error) => {
      let seriesDto = new SeriesDto();
      seriesDto.fecha = `${year}/${month}`;
      seriesDto.series = [{
        name: "01/11",
        data: [1],
        total: 1
      }, {
        name: "02/11",
        data: [2],
        total: 2
      }, {
        name: "03/11",
        data: [0.6],
        total: 0.6
      }, {
        name: "04/11",
        data: [0.9],
        total: 0.9
      }, {
        name: "05/11",
        data: [2],
        total: 2
      }, {
        name: "06/11",
        data: [3.5],
        total: 3.5
      }, {
        name: "07/11",
        data: [0.2],
        total: 0.2
      }, {
        name: "08/11",
        data: [0],
        total: 0
      }, {
        name: "09/11",
        data: [0],
        total: 0
      }, {
        name: "10/11",
        data: [7],
        total: 7
      }, {
        name: "11/11",
        data: [9.5],
        total: 9.5
      }, {
        name: "12/11",
        data: [1.2],
        total: 1.2
      }, {
        name: "13/11",
        data: [2.1],
        total: 2.1
      }, {
        name: "14/11",
        data: [1.01],
        total: 1.01
      }, {
        name: "15/11",
        data: [0.6876],
        total: 0.6
      }, {
        name: "16/11",
        data: [3.6],
        total: 3.6
      }, {
        name: "17/11",
        data: [6.9],
        total: 6.9
      }, {
        name: "18/11",
        data: [8.4],
        total: 8.4
      }, {
        name: "19/11",
        data: [0],
        total: 0
      }, {
        name: "20/11",
        data: [0],
        total: 0
      }, {
        name: "21/11",
        data: [0],
        total: 0
      }, {
        name: "22/11",
        data: [2.3],
        total: 2.3
      }, {
        name: "23/11",
        data: [3.5],
        total: 3.5
      }, {
        name: "24/11",
        data: [6.4],
        total: 6.4
      }, {
        name: "25/11",
        data: [8.5],
        total: 8.5
      }, {
        name: "26/11",
        data: [1.3],
        total: 1.3
      }, {
        name: "27/11",
        data: [1.6],
        total: 1.6
      }, {
        name: "28/11",
        data: [0],
        total: 0
      }, {
        name: "29/11",
        data: [0.4],
        total: 0.4
      }, {
        name: "30/11",
        data: [3.4],
        total: 3.4
      }];
      result(seriesDto);
    });
  }

  public getSingleDiario(year: number, month: number, day: number): Promise<SeriesDto> {
    return new Promise<SeriesDto>((result, error) => {
      let seriesDto = new SeriesDto();
      seriesDto.fecha = `${year}/${month}/${day}`;
      seriesDto.series = [{
        name: "00:00",
        data: [0],
        total: 0
      }, {
        name: "01:00",
        data: [0],
        total: 0
      }, {
        name: "02:00",
        data: [0],
        total: 0
      }, {
        name: "03:00",
        data: [0],
        total: 0
      }, {
        name: "04:00",
        data: [0],
        total: 0
      }, {
        name: "05:00",
        data: [0],
        total: 0
      }, {
        name: "06:00",
        data: [0],
        total: 0
      }, {
        name: "07:00",
        data: [0],
        total: 0
      }, {
        name: "08:00",
        data: [0],
        total: 0
      }, {
        name: "09:00",
        data: [0],
        total: 0
      }, {
        name: "10:00",
        data: [0.4],
        total: 0.4
      }, {
        name: "12:00",
        data: [1],
        total: 1
      }, {
        name: "13:00",
        data: [1],
        total: 1
      }, {
        name: "14:00",
        data: [0.6],
        total: 0.6
      }, {
        name: "15:00",
        data: [0.2],
        total: 0.2
      }, {
        name: "16:00",
        data: [1],
        total: 1
      }, {
        name: "17:00",
        data: [0.8],
        total: 0.8
      }, {
        name: "18:00",
        data: [1],
        total: 1
      }, {
        name: "19:00",
        data: [1],
        total: 1
      }, {
        name: "20:00",
        data: [0.8],
        total: 0.8
      }, {
        name: "21:00",
        data: [0],
        total: 0
      }, {
        name: "22:00",
        data: [0.3],
        total: 0.3
      }, {
        name: "23:00",
        data: [0.7],
        total: 0.7
      }];
      result(seriesDto);
    });
  }

}
