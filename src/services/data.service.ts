import { Person } from 'src/models/person.model';
import { Subject } from 'rxjs';

export class DataService {
    persons: Person[] = [];
    anotherPersonAdded: Subject<Person> = new Subject<Person>();

    addPerson(personToAdd: Person) {
        this.persons.push(personToAdd);
    }
}
