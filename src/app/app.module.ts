import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, WeatherAppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
