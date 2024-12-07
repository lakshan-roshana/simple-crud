import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
    items: any[] = [];

    constructor(private itemService: ItemService) {}

    ngOnInit() {
        this.itemService.getAllItems().then(response => this.items = response.data);
    }

    deleteItem(id: string) {
        this.itemService.deleteItem(id).then(() => this.ngOnInit());
    }
}
