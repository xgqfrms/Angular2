# Angular 2 Forms Tutorial



http://codingthesmartway.com/angular-2-forms-tutorial-introduction/


https://www.youtube.com/watch?v=I4TD-LXq2sY  


## CLI

```sh
$ npm install -g angular-cli

$ ng new angular2-forms-app

$ cd angular2-forms-app

$ ng serve
``` 

## Create a Data Model Class (src/app/book.model.ts)

```code
export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public url?: string
  ) { }
}
``` 

## Import FormsModule (app.module.ts)

```code
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
``` 

## Create a Form Component (src/app/book-form/*)

```code
# Scaffolding a New Component
$ ng g component book-form

---book-form
    |---book-form.component.css
    |---book-form.component.html
    |---book-form.component.spec.ts
    |---book-form.component.ts

# app.module.ts (auto finished)
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }
``` 

## Implementing The Form Template (book-form.component.html)

```code
<div class="container">
    <h1>Book Form</h1>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" required>
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input type="text" class="form-control" id="author" required>
      </div>
      <div class="form-group">
        <label for="url">URL</label>
        <input type="text" class="form-control" id="url">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
</div>
``` 

## 

```code
$ npm install bootstrap —save
<link rel="stylesheet" href="https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css">
``` 

## book-form.component.ts 

```code
selector: 'book-form'
``` 

## app.component.html

```code
<book-form></book-form>
``` 

## Implementing Two-Way Data Binding 

```code
<div class="container">
  <h1>Book Form</h1>
  <form>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" required [(ngModel)]="model.title" name="title">
    </div>
    <div class="form-group">
      <label for="author">Author</label>
      <input type="text" class="form-control" id="author" required [(ngModel)]="model.author" name="author">
    </div>
    <div class="form-group">
      <label for="url">URL</label>
      <input type="text" class="form-control" id="url" [(ngModel)]="model.url" name="url">
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>
``` 

## Display Model Data (book-form.component.ts)  

```code
import { Component, OnInit } from '@angular/core';

import { Book } from '../book.model';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  model = new Book(1, '', '', 'http://');

  constructor() { }

  ngOnInit() {
  }

  get currentBook() { return JSON.stringify(this.model); }
}


<div>
<h2>Model:</h2>
{{ currentBook }}
</div>
``` 


## morec coming soon ...

http://codingthesmartway.com/angular-2-forms-tutorial-introduction/

这是一系列关注Angular 2表单的教程的开始。  
在下一部分中，我们将深入了解主题，并扩展表单，还包括直接和即时用户反馈的验证逻辑。敬请关注！
## 

```code

``` 

## 

```code

``` 











