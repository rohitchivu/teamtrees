import { Component } from '@angular/core';
import { LeaderboardItem } from './leaderboard-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamtrees';
  leaderboardItems = [
    new LeaderboardItem("Lino Cóndor", "Treess!!", 1), 
    new LeaderboardItem("Sam Kellens", "1 laptop 1 tree studentlaptops.be", 6),
    new LeaderboardItem("Karima El Kahia", "1 laptop 1 tree studentlaptops.be", 4), 
    new LeaderboardItem("Emily Van Hove", "1 laptop 1 tree studentlaptops.be", 1)
  ];
}


