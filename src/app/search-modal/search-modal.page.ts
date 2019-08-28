import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {BookSearch, ItemsEntity} from '../shared/models/books.model';
import {UserServiceService} from '../shared/services/user-service.service';


@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.page.html',
  styleUrls: ['./search-modal.page.scss'],
})
export class SearchModalPage implements OnInit {

  bookSearch: BookSearch

  constructor(public modalController: ModalController, private http: HttpClient, private alertController: AlertController, private userService: UserServiceService) {}

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  searchChanged(event: any) {
    const searchTerm = event.target.value;
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}:keyes&key=AIzaSyB8m7umExGV6jwy3revqLr537zxqY9L4mg`).subscribe((data: BookSearch) => {
      console.log (data);
      this.bookSearch = data;
    });
  }

  goToBookDetails(book: ItemsEntity) {
    console.log('Selected Book', book);
    this.presentAlertConfirm(book);
  }

  async presentAlertConfirm(book: ItemsEntity) {
    const alert = await this.alertController.create({
      header: 'Add Book?',
      message: `Would you like to add  <strong>${book.volumeInfo.title}</strong> to your book collection?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.userService.addToBookCollection(book);
            this.dismiss();
          }
        }
      ]
    });
    alert.present();
  }

}
