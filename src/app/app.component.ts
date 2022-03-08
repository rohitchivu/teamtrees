import { Component } from '@angular/core';
import { LeaderboardItem } from './leaderboard-item';
import { mock_faq_list } from './mainpage/mock_faq_list';
import { ProductItemModelFAQ } from './mainpage/product_item_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamtrees';

  faqs: ProductItemModelFAQ[] = [];

  constructor() {
    // fetch code here

    for (var product in mock_faq_list) {

    }
  }
}


