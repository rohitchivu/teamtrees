export class LeaderboardItem {
    public name: string = "Name"; 
    public comment: string = "Comment";
    public trees: number = 0;
    constructor(name: string, comment: string, trees: number) {
        this.name = name; 
        this.comment = comment; 
        this.trees = trees; 
    }
}
 