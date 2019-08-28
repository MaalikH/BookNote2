import { Component, OnInit, Input } from '@angular/core';
import {ItemsEntity} from '../../../shared/models/books.model';

@Component({
  selector: 'app-book-card-without-cover',
  templateUrl: './book-card-without-cover.component.html',
  styleUrls: ['./book-card-without-cover.component.scss'],
})
export class BookCardWithoutCoverComponent implements OnInit {
  @Input() book: ItemsEntity

  constructor() { }

  ngOnInit() {}

}
