import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { StandComponent } from './app/stand/stand.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(StandComponent);
