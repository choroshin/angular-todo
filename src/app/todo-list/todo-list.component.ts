import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  public todoTitle: string;

  constructor() {
  }

  ngOnInit() {
  }

  public create(title) {
    this.todos.push(new Todo(title));
  }

  public delete() {
    // add delete functionality
  }

  public complete(todo: Todo) {
    todo.isComplete = !todo.isComplete;
  }
}
