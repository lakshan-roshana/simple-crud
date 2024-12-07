import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule for HTTP requests
import { ItemFormComponent } from './app/components/item-form/item-form.component';
import { ItemListComponent } from './app/components/item-list/item-list.component';
import { BrowserModule } from '@angular/platform-browser'; // Import BrowserModule

// Bootstrap the main component directly
bootstrapApplication(ItemFormComponent, {
  imports: [
    BrowserModule,         // Provide BrowserModule
    HttpClientModule,      // Provide HttpClientModule
    ItemListComponent,     // Add other components you want to use
  ]
}).catch(err => console.error(err));
