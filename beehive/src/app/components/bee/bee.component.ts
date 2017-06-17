import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})

export class BeeComponent implements OnInit {
  @Input() bee;
  @Input() posts;
  @Input() album;
  @Input() todos;
  @Output() currentPosts = new EventEmitter();
  @Output() currentAlbum = new EventEmitter();
  @Output() currentTodos = new EventEmitter();
  @Output() sendBee = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  showPosts() {
    this.currentPosts.emit(this.bee.getPosts());
  }

  showAlbum() {
    this.currentAlbum.emit(this.bee.getAlbum());
  }
  showTodos() {
    this.currentTodos.emit(this.bee.getTodos());
  }

  sendMe() {
    this.sendBee.emit(this.bee);
  }
}
