import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';

// Factory function to provide Highcharts modules
export function highchartsModules() {
  // Return an array of the Highcharts modules
  return [more, exporting];
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(), // movie.service
    provideClientHydration(),
    provideAnimations(),
    provideToastr(), // Toastr providers
    { provide: HIGHCHARTS_MODULES, 
      useFactory: highchartsModules } 
    ]
};
