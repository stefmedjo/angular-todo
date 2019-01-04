import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

import { TodoService } from "./services/todo/todo.service";

const routes : Routes = [
  { path : "", component : HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
