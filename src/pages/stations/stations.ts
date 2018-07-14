import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-stations',
  templateUrl: 'stations.html'
})
export class StationsPage {
  platforms: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getPlatforms();
  }

  getPlatforms() {
    this.restProvider.getPlatform()
      .then(data => {
        this.platforms = data;
        console.log(this.platforms);
      })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.getPlatforms();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
