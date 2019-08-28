import {Component, Input, OnInit} from '@angular/core';
import {ItemsEntity} from '../../../shared/models/books.model';

@Component({
  selector: 'app-book-card-with-cover',
  templateUrl: './book-card-with-cover.component.html',
  styleUrls: ['./book-card-with-cover.component.scss'],
})
export class BookCardWithCoverComponent implements OnInit {
  @Input() book: ItemsEntity;

  constructor() { }

  ngOnInit() {}

}
