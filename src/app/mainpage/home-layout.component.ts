import { Component, OnInit } from "@angular/core";
import { LeaderboardItem } from "../leaderboard-item";
import { FAQService } from "./faq.service";
import { mock_faq_list } from "./mock_faq_list";
import { ProductItemModelFAQ } from "./product_item_model";

@Component({
    selector: 'home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent {
    leaderboardItems = [
         new LeaderboardItem("Lino Cóndor", "Treess!!", 1), 
        new LeaderboardItem("Sam Kellens", "1 laptop 1 tree studentlaptops.be", 6),
        new LeaderboardItem("Karima El Kahia", "1 laptop 1 tree studentlaptops.be", 4), 
        new LeaderboardItem("Emily Van Hove", "1 laptop 1 tree studentlaptops.be", 1)
      ];
      
    FAQItems:  ProductItemModelFAQ [] = [];
    items: any;

    constructor () {
        for (var item of mock_faq_list) {
            console.log (item);
            this.items.push(item);
        }
    }
}
