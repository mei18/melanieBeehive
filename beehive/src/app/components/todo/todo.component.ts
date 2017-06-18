import { Component, OnInit, Input } from '@angular/core';
import { Bee } from '../../models/bee';
import { Post } from '../../models/post';
import { Company } from '../../models/company';
import { Address } from '../../models/address';
import { Geo } from '../../models/geo';
import { Album } from '../../models/album';
import { Photo } from '../../models/photo';
import { Todo } from '../../models/todo';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  @Input() bee;
  todoId;
  textTodo;
  btnTodo;
  completed;

  constructor() { }

  ngOnInit() {
  }

  completeTodo() {

    this.todoId = this.todo.getId();
    this.completed = this.todo.getCompleted();

    if (this.completed == false) {
      this.todo.setCompleted(true);
    }
  }
}
