import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {SearchModalPageModule} from '../search-modal/search-modal.module';
import {SearchModalPage} from '../search-modal/search-modal.page';
import {BookCardWithCoverComponent} from './book-cards/book-card-with-cover/book-card-with-cover.component';
import {BookCardWithoutCoverComponent} from './book-cards/book-card-without-cover/book-card-without-cover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, BookCardWithCoverComponent, BookCardWithoutCoverComponent],
  entryComponents: [],
})
export class HomePageModule {}
