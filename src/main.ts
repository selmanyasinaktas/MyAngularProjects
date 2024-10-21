import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'hammerjs';  // Eğer bu bağımlılığı kullanıyorsanız bunu tutabilirsiniz

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
