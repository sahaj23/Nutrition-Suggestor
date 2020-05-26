import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PouchDBService } from '../pouchdb.service';
import { FoodItem } from '../food-item.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  foodItem:FoodItem;
  constructor(private pouchService: PouchDBService) { 
  }

  ngOnInit(): void {
    // this.database.sync("http://localhost:4985/user");
  }
  onSubmit(form: NgForm) {
    // this.foodItem.name = form.value.name;
    // this.foodItem.type = form.value.itemType;
    // this.foodItem.calories=form.value.calories;
    // this.foodItem.unit=form.value.unit;
    // this.foodItem.price=form.value.price;
    
    this.pouchService.put(form.value.name,form.value);
  
  }

}
