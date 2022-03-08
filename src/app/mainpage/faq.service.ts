import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModelFAQ } from "./product_item_model";

@Injectable({
    providedIn: 'root'
})

export class FAQService {
    private baseUrl:string = 'https://teamtrees-8b578-default-rtdb.firebaseio.com/';
    private faqEndpoint:string = "/faq.json";

    constructor(private http:HttpClient) {

    }

    public getFAQ() {
        return this.http.get<ProductItemModelFAQ []>(this.baseUrl + this.faqEndpoint);
    }
}