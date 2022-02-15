import { Component } from "@angular/core";
import { LeaderboardItem } from "../leaderboard-item";

@Component({
    selector: 'sidebar-layout',
    templateUrl: 'sidebar-layout.component.html',
    styleUrls: ['sidebar-layout.component.css']
})

export class SidebarLayoutComponent {
    leaderboardItems = [
        new LeaderboardItem("Lino Cóndor", "Treess!!", 1), 
        new LeaderboardItem("Sam Kellens", "1 laptop 1 tree studentlaptops.be", 6),
        new LeaderboardItem("Karima El Kahia", "1 laptop 1 tree studentlaptops.be", 4), 
        new LeaderboardItem("Emily Van Hove", "1 laptop 1 tree studentlaptops.be", 1)
      ];
}