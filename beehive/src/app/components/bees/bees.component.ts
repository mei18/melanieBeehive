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
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {
  @Input() bees;
  @Output() sendReceivedBee = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  receivedBee(bee: Bee) {
    this.sendReceivedBee.emit(bee);
  }


}
