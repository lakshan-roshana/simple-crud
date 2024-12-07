import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  standalone: true,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    // Fetch all items
    this.itemService.getItems().subscribe(
      (response: Item[]) => {
        this.items = response;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  // Delete an item by id
  deleteItem(id: string) {
    this.itemService.deleteItem(id).subscribe(
      () => {
        this.ngOnInit();  // Refresh the item list after deletion
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting item:', error);
      }
    );
  }
}
