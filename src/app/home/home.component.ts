import { Component, OnInit, NgZone } from '@angular/core';
import { PouchDBService } from '../pouchdb.service';
import { FoodItem } from '../food-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: Array<FoodItem>;

public constructor(private database: PouchDBService, private zone: NgZone) {
  this.items = [];
}

  ngOnInit() {
    this.database.sync("http://localhost:4984/health/");
    this.database.getChangeListener().subscribe(data => {
        for(let i = 0; i < data.change.docs.length; i++) {
            this.zone.run(() => {
              
                console.log("change "+data.change.docs[i]);
                this.items.push(data.change.docs[i]);
            });
        }
    });
    this.database.fetch().then(result => {
        for(let i = 0; i < result.rows.length; i++) {
          this.items.push(result.rows[i].doc);
          console.log(result.rows[i].doc)
            console.log("Fetch "+result.rows[i].doc);
        }
    }, error => {
        console.error(error);
    });
  }
  
}

