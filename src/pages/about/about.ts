import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  events: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getEvents()
  }

  getEvents() {
    this.restProvider.getEvents()
      .then(data => {
        this.events = data;
        console.log(this.events);
      })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.getEvents();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
