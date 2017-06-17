import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Bee } from '../../models/bee';
import { Post } from '../../models/post';
import { Company } from '../../models/company';
import { Address } from '../../models/address';
import { Geo } from '../../models/geo';
import { Album } from '../../models/album';
import { Photo } from '../../models/photo';
import { Todo } from '../../models/todo';
import { Comment } from '../../models/comment';
import { BeeComponent } from '../bee/bee.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() bee;

  constructor() { }

  ngOnInit() { }

  addNewPost() {
    console.log("post");

  }
}
