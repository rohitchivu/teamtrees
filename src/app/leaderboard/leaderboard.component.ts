import { Component, Input } from "@angular/core";


@Component({
    selector: "leaderboard", 
    templateUrl: "leaderboard.component.html", 
    styleUrls: ["leaderboard.component.css"]
})

export class LeaderBoard {
    @Input() name: string = "Name";
    @Input() comment: string = "Comment"; 
    @Input() trees: number = 0;
}