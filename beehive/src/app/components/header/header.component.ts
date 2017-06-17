import { Component, OnInit } from '@angular/core';
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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "The Beehive"
  constructor() { }

  ngOnInit() {
  }

}
