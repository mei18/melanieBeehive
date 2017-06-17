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
import { AppComponent } from '../../app.component';
import { BeeComponent } from '../bee/bee.component';

@Component({
  selector: 'app-bee-activity',
  templateUrl: './bee-activity.component.html',
  styleUrls: ['./bee-activity.component.css']
})
export class BeeActivityComponent implements OnInit {
  @Input() bee;

  constructor() { }

  ngOnInit() { }

}
