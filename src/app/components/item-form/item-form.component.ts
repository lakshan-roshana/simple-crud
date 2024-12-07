import { Component } from '@angular/core';
//import { ItemService } from './item.service';  // Correct import path
//import { Item } from '/models/item.model';  // Correct import path
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';  // Correct import path
import { Item } from '../../models/item.model';  // Correct import path

@Component({
  selector: 'app-item-form',
  standalone: true,
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
  imports: [FormsModule]
})
export class ItemFormComponent {
  item: Item = { name: '', description: '' };  // Define 'name' and 'description'

  constructor(private itemService: ItemService) {}

  addItem(): void {
    if (this.item.name && this.item.description) {
      this.itemService.createItem(this.item).subscribe(response => {
        // Handle successful item creation (e.g., reset form, show notification)
        this.item = { name: '', description: '' }; // Reset the form after submission
      });
    }
  }
}
