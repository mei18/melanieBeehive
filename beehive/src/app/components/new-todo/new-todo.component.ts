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
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  @Input() bee;
  @Input() todo;
  @Input() titleTodo: string
  completed
  newIdTodo = 200 + 1;

  constructor() { }

  ngOnInit() { }

  addTodo() {
    this.completed = false;
    this.bee.todos.push(new Todo(this.newIdTodo, this.bee.getId(), this.titleTodo, this.completed));
    console.log(this.bee.todos);
    this.titleTodo = "";
  }
}
