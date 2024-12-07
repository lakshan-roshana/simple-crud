import axios from 'axios';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
    providedIn: 'root',
})
export class ItemService {
    private apiUrl = 'http://localhost:5000/api/item';

    getAllItems() { return axios.get(this.apiUrl); }

    createItem(item: Item) { return axios.post(this.apiUrl, item); }

    updateItem(id: string, item: Item) { return axios.put(`${this.apiUrl}/${id}`, item); }
    
    deleteItem(id: string) { return axios.delete(`${this.apiUrl}/${id}`); }
}
