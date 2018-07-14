import {Component, ViewChild, ElementRef} from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker,
  MarkerCluster,
  MarkerClusterOptions,
  MarkerClusterIcon
} from '@ionic-native/google-maps';
import {NavController, Platform} from 'ionic-angular';
import { Observable, interval, of } from 'rxjs';
import { RestProvider } from '../../providers/rest/rest'
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') element;
  private stations = [];
  platforms: any;
  platformx: any;

  constructor(private http: HTTP, public googleMaps: GoogleMaps, public plt: Platform, public nav: NavController,  public restProvider: RestProvider) {

    this.stations.push({title:"Roosevelt Station", position: {lat: 14.6575085, lng: 121.0211068}});
    this.stations.push({title:"Balintawak Station", position: {lat: 14.6573742, lng: 121.0038417}});
    this.stations.push({title:"Monumento Station", position: {lat: 14.6541636, lng: 120.9838426}});
    this.stations.push({title:"5th Avenue Station", position: {lat: 14.6442761, lng: 120.9835126}});
    this.stations.push({title:"R. Papa Station", position: {lat: 14.6360459, lng: 120.9823606}});
    this.stations.push({title:"Abad Santos Station", position: {lat: 14.6306506, lng: 120.9813576}});
    this.stations.push({title:"Blumentritt Station", position: {lat: 14.6227638, lng: 120.9827973}});
    this.stations.push({title:"Tayuman Station", position: {lat: 14.6166733, lng: 120.9828535}});
    this.stations.push({title:"Bambang Station", position: {lat: 14.6111077, lng: 120.9823650}});
    this.stations.push({title:"Doroteo Jose Station", position: {lat: 14.6054128, lng: 120.9819391}});
    this.stations.push({title:"Carriedo Station", position: {lat: 14.5989282, lng: 120.9812791}});
    this.stations.push({title:"Central Terminal Station", position: {lat: 14.5928463, lng: 120.9816209}});
    this.stations.push({title:"United Nations Station", position: {lat: 14.5827373, lng: 120.9845427}});
    this.stations.push({title:"Pedro Gil Station", position: {lat: 14.5765406, lng: 120.9881085}});
    this.stations.push({title:"Quirino Station", position: {lat: 14.5702436, lng: 120.9916194}});
    this.stations.push({title:"Vito Cruz Station", position: {lat: 14.5635410, lng: 120.9947090}});
    this.stations.push({title:"Gil Puyat Station", position: {lat: 14.5541106, lng: 120.9971305}});
    this.stations.push({title:"Libertad Station", position: {lat: 14.5476644, lng: 120.9986100}});
    this.stations.push({title:"EDSA Station", position: {lat: 14.5389780, lng: 121.0005946}});
    this.stations.push({title:"Baclaran Station", position: {lat: 14.5342782, lng: 120.9984029}});

    this.getPlatform();
  }

  getPlatform() {
    this.restProvider.getPlatform()
      .then(data => {
        this.platforms = data;
        console.log(this.platforms);
      })
  }

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {
    let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);
    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      let coordinates: LatLng = new LatLng(14.657627, 121.011657);
      let position = {
        target: coordinates,
        zoom: 13
      };
      map.animateCamera(position);

      addStationMarkers();
      addPlatformVolume();
      /* refresh platformdata */
      interval(1000 * 10).subscribe(x => {
          this.platformx = null;

      });

      /* refresh platform data */
      interval(1000 * 10).subscribe(x => {

      });

      /* add station volume polygons */
      function addStationData() {
      }

      /* add trains icons */
      function addRailwayData() {
      }
    });

    function addPlatformVolume() {

    }


    addStationMarkers();
    function addStationMarkers() {
      let Roosevelt: Marker = map.addMarkerSync({
        title: 'Roosevelt Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6575085,
          lng: 121.0211068
        }
      });
      Roosevelt.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      });

      let Balintawak: Marker = map.addMarkerSync({
        title: 'Balintawak Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6573742,
          lng: 121.0038417
        }
      });
      Balintawak.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Monumento: Marker = map.addMarkerSync({
        title: 'Monumento Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6541636,
          lng: 120.9838426
        }
      });
      Monumento.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let FifthAvenue: Marker = map.addMarkerSync({
        title: '5th Avenue Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6442761,
          lng: 120.9835126
        }
      });
      FifthAvenue.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let RPapa: Marker = map.addMarkerSync({
        title: 'R. Papa Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6360459,
          lng: 120.9835126
        }
      });
      RPapa.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let AbadSantos: Marker = map.addMarkerSync({
        title: 'Abad Santos Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6306506,
          lng: 120.9813576
        }
      });
      AbadSantos.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Blumentritt: Marker = map.addMarkerSync({
        title: 'Blumentritt Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6227638,
          lng: 120.9827973
        }
      });
      Blumentritt.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Tayuman: Marker = map.addMarkerSync({
        title: 'Tayuman Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6166733,
          lng: 120.9828535
        }
      });
      Tayuman.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Bambang: Marker = map.addMarkerSync({
        title: 'Bambang Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6111077,
          lng: 120.9823650
        }
      });
      Bambang.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Doroteo: Marker = map.addMarkerSync({
        title: 'Doroteo Jose Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.6054128,
          lng: 120.9819391
        }
      });
      Doroteo.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Carriedo: Marker = map.addMarkerSync({
        title: 'Carriedo Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5989282,
          lng: 120.9812791
        }
      });
      Carriedo.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Central: Marker = map.addMarkerSync({
        title: 'Central Terminal Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5928463,
          lng: 120.9816209
        }
      });
      Central.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let United: Marker = map.addMarkerSync({
        title: 'United Nations Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5827373,
          lng: 120.9845427
        }
      });
      United.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Pedro: Marker = map.addMarkerSync({
        title: 'Pedro Gil Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5765406,
          lng: 120.9881085
        }
      });
      Pedro.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Quirino: Marker = map.addMarkerSync({
        title: 'Quirino Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5702436,
          lng: 120.9916194
        }
      });
      Quirino.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Vito: Marker = map.addMarkerSync({
        title: 'Vito Cruz Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5635410,
          lng: 120.9947090
        }
      });
      Vito.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Gil: Marker = map.addMarkerSync({
        title: 'Gil Puyat Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5541106,
          lng: 120.9971305
        }
      });
      Gil.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Libertad: Marker = map.addMarkerSync({
        title: 'Libertad Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5476644,
          lng: 120.9986100
        }
      });
      Libertad.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let EDSA: Marker = map.addMarkerSync({
        title: 'EDSA Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5389780,
          lng: 121.0005946
        }
      });
      EDSA.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });

      let Baclaran: Marker = map.addMarkerSync({
        title: 'Baclaran Station',
        icon: {url: "./assets/icon/station.png", size: {width: 32, height: 32}},
        position: {
          lat: 14.5541106,
          lng: 120.9971305
        }
      });
      Baclaran.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });
    }
    /* refresh map function */
  }
}
