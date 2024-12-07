import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Correct way to provide HttpClient
import { ItemFormComponent } from './app/components/item-form/item-form.component'; // Update to your root component

bootstrapApplication(ItemFormComponent, {
  providers: [
    provideHttpClient(), // Provide HttpClient here
  ],
}).catch(err => console.error(err));
