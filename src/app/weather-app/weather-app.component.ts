import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { WeatherService } from './weather-service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherAppComponent implements OnInit {
  cityName: string = 'Bangalore';
  weatherData: any;
  iconUrl: string = '';
  currentDate: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.loading = true;
    this.error = '';
    this.weatherService.getWeather(this.cityName).subscribe(
      (data) => {
        this.handleWeatherResponse(data);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  handleWeatherResponse(data: any): void {
    this.weatherData = data;
    this.iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    this.loading = false;
  }

  handleError(error: any): void {
    this.error = 'City not found. Please try again.';
    this.loading = false;
    console.error('Error fetching weather data:', error);
  }
}
