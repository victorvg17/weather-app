import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private url = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

  constructor(private http: HttpClient) {}

  getWeatherUrl(cityName: string): string {
    return `${this.url}?q=${cityName}&appid=${this.apiKey}&units=metric`;
  }

  getWeather(city: string): Observable<any> {
    const fullUrl = this.getWeatherUrl(city);
    return this.http.get(fullUrl);
  }
}
