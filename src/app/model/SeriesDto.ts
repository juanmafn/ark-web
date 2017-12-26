interface ISerieDto {
    name: string;
    data: number[];
    total: number;
}

interface ISeriesDto {
    series: SerieDto[];
    fecha: string;
}

class SerieDto implements ISerieDto {
    name: string;
    data: number[];
    total: number;
    
    constructor() {
        this.name = "";
        this.data = [];
        this.total = 0;
    }
}

export class SeriesDto implements ISeriesDto{
    series: SerieDto[];
    fecha: string;
}