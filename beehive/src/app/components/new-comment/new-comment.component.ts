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
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  @Input() bee;
  @Input() post;
  @Input() comment;
  @Input() titleComment: string;
  @Input() bodyComment: string;
  @Input() userEmail: string;
  allPosts;
  newIdComment = 500 + 1;

  constructor() { }

  ngOnInit() { }

  addComment() {
    this.allPosts = this.bee.getPosts();
    console.log("hellos", this.allPosts);
    console.log("hellos", this.post);


    this.post.comments.push(new Comment(this.newIdComment, this.post.getId(), this.titleComment, this.bodyComment, this.userEmail));
    console.log(this.post.getComments());

    this.titleComment = "";
    this.bodyComment = "";
    this.userEmail = "";

  }
}
