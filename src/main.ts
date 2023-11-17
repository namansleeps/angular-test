import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Contlo from 'contlo-web-sdk';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


Contlo.init('d9fa1a810ce66312beab9f86eaa3480c', 'https://ai-rnd.com/');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
