import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {OktaAuthModule} from '@okta/okta-angular';
import {OktaAuth} from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://${dev-00236918.okta.com}/oauth2/default',
  clientId: '${0oahn69ttlScdqdlr5d7}',
  redirectUri: window.location.origin + '/dashboard/callback'
});




export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(), 
    provideAnimationsAsync(),
    importProvidersFrom(OktaAuthModule.forRoot({ oktaAuth })),
    
    
    
    
  ]
};
