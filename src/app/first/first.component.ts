import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Person } from 'src/models/person.model';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  person: Person;
  @Input() personsCount: number;
  @Output() personAdded = new EventEmitter<Person>();
  @ViewChild('firstName', {static: false}) firstName: ElementRef;
  @ViewChild('lastName', {static: false}) lastName: ElementRef;
  @ViewChild('age', {static: false}) age: ElementRef;
  @ViewChild('date', {static: false}) date: ElementRef;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.personAdded.emit(new Person('Oluwaremi', 'Oluwole', 30, new Date('1989/4/19')));
    this.dataService.anotherPersonAdded.next(new Person('Adetoro', 'Thompson', 25, new Date('1994-03-23')));
  }

  onPersonAdd() {
    this.personAdded.emit(
      new Person(
      this.firstName.nativeElement.value,
      this.lastName.nativeElement.value,
      this.age.nativeElement.value,
      new Date(this.date.nativeElement.value)),
      );
  }

  getPersonsCount() {
    return this.dataService.persons.length;
  }
}
