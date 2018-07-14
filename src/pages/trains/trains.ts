import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-trains',
  templateUrl: 'trains.html'
})
export class TrainsPage {
  trains: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getFirstTrains();
  }

  getFirstTrains() {
    this.restProvider.getFirstTrains()
      .then(data => {
        this.trains = data;
        console.log(this.trains);
      })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.getFirstTrains();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
