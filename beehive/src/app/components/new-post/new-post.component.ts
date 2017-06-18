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
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() bee;
  @Input() post;
  @Input() titlePost: string;
  @Input() bodyPost: string;

  newIdPost = 100 + 1;

  constructor() { }

  ngOnInit() { }

  addPost() {

    this.bee.posts.push(new Post(this.newIdPost, this.bee.getId(), this.titlePost, this.bodyPost));
    console.log(this.bee.getPosts());

    this.titlePost = "";
    this.bodyPost = "";
  }
}
