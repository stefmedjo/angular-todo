import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo/todo.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos : any = []
  formGroup : FormGroup

  constructor(
    private todoService : TodoService,
    private formBuilder : FormBuilder,
    ) { 
      this.formGroup = this.formBuilder.group({ desc : "" });
    }

  ngOnInit() {
    this.todos = []
    this.todos = this.todoService.getAll()
  }

  submit(){
    this.todos.push({desc : this.formGroup.value.desc, done : false })
    this.formGroup = this.formBuilder.group({ desc : "" });
  }

}
