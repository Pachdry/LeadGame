import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.page.html',
  styleUrls: ['./spinner.page.scss'],
})
export class SpinnerPage implements OnInit {
  foo = 10 
  constructor() { 
    timer(4000).subscribe(() => (this.foo = -1)); // In Constructor
  }

  ngOnInit() {
  }

}
