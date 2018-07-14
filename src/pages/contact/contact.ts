import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  promotions: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getPromotions();
  }

  getPromotions() {
    this.restProvider.getPromotions()
      .then(data => {
        this.promotions = data;
        console.log(this.promotions);
      })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.getPromotions();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
