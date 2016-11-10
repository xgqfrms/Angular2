import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);

// entry

// 通过引导应用程序的根模块启动应用程序。在开发过程中，你可能会在像这样的main.ts文件中引导AppModule。
