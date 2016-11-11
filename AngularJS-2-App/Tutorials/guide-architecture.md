# guide

https://angular.io/docs/ts/latest/guide/


******************************************************************************************
# architecture

```code


/*
https://angular.cn/docs/ts/latest/guide/architecture.html

Angular 应用是模块化的，并且 Angular 有自己的模块系统，它被称为 Angular 模块 或 NgModules 。

每个 Angular 应用至少有一个模块（ 根模块 ），习惯上命名为 AppModule 。


NgModule 是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是：

declarations （声明） - 本模块中拥有的视图类。 

Angular 有三种视图类： 组件 、 指令 和 管道 。

exports - 声明（ declaration ）的子集，它可用于其它模块中的组件 模板 。

imports - 本 模块组件模板中需要由其它模块导出的类。

providers - 服务 的创建者。本模块把它们加入全局的服务表中，让它们在应用中的任何部分都可被访问到。

bootstrap - 标识出应用的主视图（被称为 根组件 ），它是所有其它视图的宿主。只有 根模块 才能设置 bootstrap 属性。


AppComponent的 export只是为了说明如何导出;在该示例中实际上不是必需的。

根模块没有理由导出任何内容，因为其他组件不需要导入根模块。

模块库

Angular 发布了一组 JavaScript 模块。我们可以把它们看做库模块。

每个 Angular 库的名字都带有 @angular 前缀。

我们可以用 npm 包管理工具安装它们，并且用 JavaScript 的 import 语句导入它们的某些部件。

比如，我们从 @angular/core 库中导入 Component 装饰器，就像这样：

import { Component } from '@angular/core';

我们还使用 JavaScript 的导入语句从 Angular 库 中导入 Angular 的 某些模块 。

import { BrowserModule } from '@angular/platform-browser';

在上面这个关于根模块的小例子中，应用模块需要来自 BrowserModule 的某些素材。要访问这些素材，我们就得把它加入 @NgModule 元数据的 imports 中去，就像这样：

imports:      [ BrowserModule ],


这两个系统比较容易混淆，因为它们共享相同的词汇（“ imports ”和“ exports ”）。 
先放一放，随着时间和经验的增长，自然就会澄清了

https://angular.cn/docs/ts/latest/guide/ngmodule.html

*/


/*
https://angular.cn/docs/ts/latest/guide/architecture.html

组件 :

负责控制屏幕上的一小块地方，我们称之为 视图 。

你定义一个组件的应用程序逻辑 -它用来支持视图 - 在类的内部。类通过属性和方法组成的API与视图交互。


当用户在这个应用中“移动”时， Angular 会创建、更新和销毁组件。

你的应用程序可以在这个生命周期的每一时刻采取行动,通过可选的生命周期钩子, 如上面声明的ngOnInit()。

https://angular.cn/docs/ts/latest/guide/lifecycle-hooks.html


*/

/*
模板 :

使用其(组件)自带的模板定义一个组件的视图. 模板是一种 HTML的形式，告诉Angular如何渲染组件。

模板看起来像常规HTML，除了一些差异。

虽然此模板使用典型的HTML元素，如<h2>和<p>，但它也有一些差异。

像* ngFor，{{hero.name}}，(click)，[hero]和<hero-detail>等代码使用Angular的模板语法。

在模板的最后一行，<hero-detail>标签是一个自定义元素，表示一个新的组件，HeroDetailComponent.

https://angular.cn/docs/ts/latest/guide/template-syntax.html

HeroDetailComponent 跟以前见到过的 HeroListComponent 是不同的组件。 
HeroDetailComponent( 未展示代码 ) 用于展现一个特定英雄的情况，这个英雄是用户从 HeroListComponent 列表中选择的。
HeroDetailComponent 是 HeroListComponent 的子组件 。

请注意<hero-detail>如何轻松地在原生HTML元素中休息。自定义组件与原生HTML在同一布局中无缝组合。


*/

/*
元数据 :

元数据告诉 Angular 如何处理一个类。

事实上，HeroListComponent真的只是一个类。它不是一个组件，直到你告诉Angular。

要告诉Angular HeroListComponent是一个组件，将元数据附加到类上。

在TypeScript中，您可以使用装饰器(@???)附加元数据。

这里是@Component装饰器，它将其下面的类识别为组件类。

@Component装饰器需要一个必需的配置对象，它具有Angular创建和呈现组件及其视图所需的信息。

这里有几个可能的@Component配置选项：

    moduleId：module.id：设置模块相对加载的templateUrl的基地址。

    selector：CSS选择器，它告诉Angular创建和在哪里插入这个组件的实例，在父HTML中找到一个<hero-list>标签。
    例如，如果应用程序的HTML包含<hero-list> </ hero-list>，则Angular在这些标签之间插入HeroListComponent视图的实例。

    templateUrl：此组件的HTML模板的模块相对地址，如上所示。

    providers：组件所需的服务的依赖注入提供程序数组。
    这是告诉Angular组件的构造函数需要一个HeroService以便它可以获取显示的英雄列表的一种方法。

@Component中的元数据告诉Angular在哪里获取为组件指定的主要构建块。

模板，元数据和组件一起描述一个视图。

以类似的方式应用其他元数据装饰器来引导Angular行为。 @Injectable，@Input和@Output是一些更流行的装饰器。

这种架构决定，你必须添加元数据到你的代码，以便Angular知道做什么。

*/


/*
数据绑定 :

没有框架，你将负责将数据值推入HTML控件，并将用户响应转变为操作和值更新。

用手编写这样的推/拉逻辑是冗长乏味的，容易出错，和一个噩梦阅读 任何有经验的jQuery程序员可以证明。

Angular支持数据绑定，一种用于将模板的各部分与组件的各部分进行协调的机制。

将绑定标记添加到模板HTML以告诉Angular如何连接双方。

如图所示，有四种形式的数据绑定语法。每个形式都有一个方向 - 到DOM，从DOM，或在两个方向。

HeroListComponent示例模板有三种形式：

    {{hero.name}}插值会在<li>标记中显示组件的hero.name属性值。

    https://angular.cn/docs/ts/latest/guide/displaying-data.html#!#interpolation

    [hero]属性绑定将selectedHero的值从父HeroListComponent传递给子HeroDetailComponent的hero属性。

    (click)事件绑定调用组件的selectHero方法, 当用户单击英雄的名称时.

双向数据绑定是一种重要的第四种形式，它使用ngModel指令在单个符号中组合属性绑定和事件绑定。

这里是HeroDetailComponent模板的一个例子：

    在双向绑定中，与属性绑定一样，数据属性值从组件流向输入框。
    用户的更改也会流回到组件，将属性重置为最新值，如同事件绑定一样。

Angular在每个JavaScript事件循环中处理所有数据绑定，从应用程序组件树的根目录到所有子组件。

数据绑定在模板及其组件之间的通信中起重要作用。

数据绑定对于父组件和子组件之间的通信也很重要。

*/



/*
指令 :

Angular模板是动态的。当Angular渲染它们时，它根据指令给出的指示转换DOM。

指令是带有指令元数据的类。在TypeScript中，应用@Directive装饰器将元数据附加到类。

    组件是带有模板的指令;

一个@Component装饰器实际上是一个@Directive装饰器的扩展,带有面向模板的功能。

虽然组件在技术上是一个指令，但组件对于Angular应用程序来说是如此独特和中心，所以这个架构概述将组件与指令分离。


另外两种指令存在：结构指令和属性指令。

它们往往出现在元素标签中作为属性，有时通过名称，但更多的时候是作为分配或绑定的目标。

    结构化指令通过添加，删除和替换DOM中的元素来改变布局.

    示例模板使用两个内置的结构指令：

    * ngFor 告诉Angular为英雄列表中的每个英雄生成一个<li>。

    * ngIf 仅当存在所选英雄时,才包含 HeroDetail组件。

属性指令改变现有元素的外观或行为。在模板中，它们看起来像常规的HTML属性，因此有这个名称.

实现双向数据绑定的ngModel指令是属性指令的一个示例。

ngModel 修改现有元素（通常是<input>）的行为, 通过设置其显示值属性和响应事件的改变。

Angular还有几个更多的指令，改变布局结构（例如，ngSwitch）或修改DOM元素和组件的方面（例如，ngStyle和ngClass）。

当然，你也可以写自己的指令。组件像 HeroListComponent这样的,就是一种自定义指令。

*/


/*
服务 :

服务是一个广泛的类别，包括任何值，函数或特性, 你的应用程序需要的。

几乎任何东西都可以是一个服务。服务通常是一个具有狭窄，明确目的的类。它应该做一些具体的事情，把它做得很好。

例子包括：

    日志服务 数据服务 消息总线 税计算器 应用程序配置

没有什么特别的Angular关于服务。 Angular没有服务的定义。这里没有服务基类，也没有地方注册一个服务。

然而服务是任何Angular应用程序的基础。组件是服务的大消费者。

下面是一个服务类的示例, 把日志记录到浏览器的控制台：


这里有一个HeroService获取英雄，并在一个解决的Promise中返回它们。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

HeroService依赖于Logger服务和处理服务器通信繁重工作的另一个BackendService。

服务无处不在。

组件类应该精简。它们不从服务器获取数据，验证用户输入或直接登录控制台。他们将这些任务委托给服务.

组件的任务是实现用户体验，没有更多。
它介于视图（由模板呈现）和应用程序逻辑（通常包括模型的一些概念）之间。
一个好的组件呈现用于数据绑定的属性和方法。它将一切不重要的事务委派给服务。

Angular不强制执行这些原则。它不会抱怨，即使你写一个“厨房水槽”组件有 3000行。

Angular帮助你遵循这些原则，通过使其更容易将你的应用程序逻辑转化为服务，并通过依赖注入使这些服务可用于组件。

*/

/*
依赖注入 :

依赖注入是一种向类的新实例提供它所需的完全形成的依赖的方法。大多数依赖是服务。 
Angular使用依赖注入为新组件提供他们需要的服务。


Angular可以通过查看其构造函数参数的类型来确定组件所需的服务。
例如，你的HeroListComponent的构造函数需要一个HeroService：

当Angular创建一个组件时，它首先向注射器(注射器)询问组件需要的服务。

注入器维护它先前创建的服务实例的容器。
如果一个请求的服务实例不在容器中，则注入器创建一个服务实例并将其添加到容器中，然后将服务返回到Angular。

当所有请求的服务都被解析和返回时，Angular可以使用这些服务作为参数调用组件的构造函数。这是依赖注入。

HeroService注入的过程看起来有点像这样：

如果注入器没有HeroService，它如何知道怎么创建一个呢？

简而言之，你必须先注册了注册器的HeroService提供程序。
提供者是可以创建或返回服务的东西，通常是服务类本身。

你可以在模块或组件中注册提供程序。

通常，将提供程序添加到根模块，以便服务的同一实例随处可用。

或者，在组件级别注册,在 @Component元数据的providers属性中：

在组件级别注册意味着你将获得服务的新实例与该组件的每个新实例。

关于依赖注入的要点: 

    1依赖注入连接到Angular框架中并在任何地方使用。

    2注射器是主要的机制。
        注入器维护它创建的服务实例的一个容器。
        注入器可以创建一个新的服务实例,从提供者。

    3提供程序是用于创建服务的配方。

    4用注射器注册提供程序。


*/

/*
总结 :

你学习了有关Angular应用程序的八个主要构建块的基础知识：

模块
组件
模板
元数据
数据绑定
指令
服务
依赖注入

这是Angular应用程序中其他一切的基础，它已经足够了。但它不包括你需要知道的一切。

以下是其他重要的Angular功能和服务的简要，按字母顺序排列的列表。大多数都包括在本文档中（或很快就会）








*/



















``` 



********************************************************************************************