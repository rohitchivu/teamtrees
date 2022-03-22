import { Injectable } from "@angular/core";
import { ProductItemModelFAQ } from "./product_item_model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})

export class FAQService {

    constructor(private db:AngularFireDatabase) {

    }

    public getFAQ() {
        return this.db.list<ProductItemModelFAQ>("faqs").valueChanges;
    }
}