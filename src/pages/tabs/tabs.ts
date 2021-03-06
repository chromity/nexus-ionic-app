import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';
import { TrainsPage } from '../trains/trains';
import { StationsPage } from '../stations/stations';
import { InformationPage } from '../information/information';
import { HelpPage } from '../help/help';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TrainsPage;
  tab2Root = StationsPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;
  tab5Root = NewsPage;
  tab6Root = InformationPage;
  tab7Root = HelpPage;


  constructor() {

  }
}
