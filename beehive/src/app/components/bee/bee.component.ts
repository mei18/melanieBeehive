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
  @Output() sendBee = new EventEmitter();
  isShowing;
  mediaquery;

  constructor() { }

  ngOnInit() { }

  sendMe() {
    this.sendBee.emit(this.bee);
  }

  showPosts() {
    this.isShowing = document.getElementById("posts").style.display = "block";
    this.isShowing = document.getElementById("todos").style.display = "none";
    this.isShowing = document.getElementById("album").style.display = "none";
    this.isShowing = document.getElementById("btn").style.display = "none";
  }

  showAlbum() {
    this.isShowing = document.getElementById("posts").style.display = "none";
    this.isShowing = document.getElementById("todos").style.display = "none";
    this.isShowing = document.getElementById("album").style.display = "block";
    this.isShowing = document.getElementById("btn").style.display = "none";
  }
  showTodos() {
    this.isShowing = document.getElementById("posts").style.display = "none";
    this.isShowing = document.getElementById("todos").style.display = "block";
    this.isShowing = document.getElementById("album").style.display = "none";
    this.isShowing = document.getElementById("btn").style.display = "block";
  }


}
