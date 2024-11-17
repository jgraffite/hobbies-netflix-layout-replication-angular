/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import '@tiny-slider/src/tiny-slider';
//import '@tiny-slider/dist/tiny-slider.css';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
