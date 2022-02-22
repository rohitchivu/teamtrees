import { Component, Input } from "@angular/core";

@Component({
    selector: 'faq-layout',
    templateUrl: 'faq-layout.component.html',
    styleUrls: ['faq-layout.component.css']
})

export class FAQLayoutComponent {
    @Input() question: String; 
    @Input() answer: String;

    constructor() {
        this.question = "";
        this.answer = "";
    
    }
}