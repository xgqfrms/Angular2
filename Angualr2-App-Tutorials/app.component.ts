import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  styles: [`h1 { font-weight: normal; }`]
})
export class AppComponent { name = 'Angular'; }


/*
装饰器 @Component decorator 
元数据 metadata
选择器 selector: 'my-app',
模板 template: `<h1>Hello {{name}}</h1>`
插值绑定表达式 {{name}}
template:
templateURL:
样式
styles:
styleURLs:
组件类 class AppComponent { name = 'Angular'; }
数据 name = 'Angular';

https://github.com/angular/angular/blob/2.2.2/modules/%40angular/core/src/metadata/directives.ts#L694-L715


*/

