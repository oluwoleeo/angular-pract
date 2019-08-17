import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/models/person.model';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit, OnDestroy {
  persons: Person[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.anotherPersonAdded.subscribe((person: Person) => {
      this.onPersonAdd(person);
    });
    this.persons = this.dataService.persons;
  }

  ngOnDestroy() {
    this.dataService.anotherPersonAdded.unsubscribe();
  }

  onPersonAdd(person: Person) {
    this.dataService.addPerson(person);
  }
}
