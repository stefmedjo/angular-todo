import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() desc : string;
  @Input() done : boolean;

  constructor() { }

  ngOnInit() {
  }

  isDone(){
    this.done = true
  }

}
