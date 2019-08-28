import { Injectable } from '@angular/core';
import {ItemsEntity} from '../models/books.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userBookCollection: BehaviorSubject<ItemsEntity[]> = new BehaviorSubject<ItemsEntity[]>([]);
  bookCollection = this.userBookCollection.asObservable();

  constructor() { }

  addToBookCollection(book: ItemsEntity) {
    let myBooks = this.userBookCollection.getValue();
    myBooks.push(book);
    console.log('Book Added', this.userBookCollection.value);
  }

  getBookCollection() {
    return this.userBookCollection.value;
  }
}
