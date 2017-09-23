import { Component } from '@angular/core';

import { AboutPage } from '../stewardess/stewardess';
import { ContactPage } from '../notifications/notifications';
import { HomePage } from '../vip/vip';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
