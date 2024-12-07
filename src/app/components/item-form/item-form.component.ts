import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Import HttpClientModule here
  template: `
    <h2>Item Form</h2>
    <!-- Your component HTML here -->
  `,
})
export class ItemFormComponent {}
