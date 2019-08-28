import { Component, OnInit } from '@angular/core';
import {SearchModalPage} from '../search-modal/search-modal.page';
import {ModalController} from '@ionic/angular';
import {UserServiceService} from '../shared/services/user-service.service';
import {ItemsEntity} from '../shared/models/books.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  bookCollection: ItemsEntity[];

  constructor(public modalController: ModalController, private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.bookCollection.subscribe((data: ItemsEntity[]) => {
      console.log('Book Collection', data);
      this.bookCollection = data;
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchModalPage
    });
    return await modal.present();
  }

}
