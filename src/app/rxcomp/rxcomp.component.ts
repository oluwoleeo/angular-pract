import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-rxcomp',
  templateUrl: './rxcomp.component.html',
  styleUrls: ['./rxcomp.component.css']
})
export class RxcompComponent implements OnInit, OnDestroy {
  private evtSub: Subscription;

  constructor() { }

  ngOnDestroy() {
    this.evtSub.unsubscribe();
  }

  ngOnInit() {
    this.evtSub = interval(1000).subscribe(count => console.log(count));
  }

}
