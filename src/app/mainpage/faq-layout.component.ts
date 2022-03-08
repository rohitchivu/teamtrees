import { Component, Input, OnInit } from "@angular/core";
import { FAQService } from "./faq.service";
import { mock_faq_list } from "./mock_faq_list";
import { ProductItemModelFAQ } from "./product_item_model";

@Component({
    selector: 'faq-layout',
    templateUrl: 'faq-layout.component.html',
    styleUrls: ['faq-layout.component.css']
})

export class FAQLayoutComponent implements OnInit{
    faqs: ProductItemModelFAQ[] = [];
    items: any;

    constructor(private faqService:FAQService) {
        
    }

    ngOnInit(): void {
        this.faqService.getFAQ().subscribe(data => {
            console.log("Fetching data"); 
            for (var faq of data){
                console.log(faq);
            }
        })
    }

    
}