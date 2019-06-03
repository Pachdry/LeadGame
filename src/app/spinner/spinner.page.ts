import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.page.html',
  styleUrls: ['./spinner.page.scss'],
})
export class SpinnerPage implements OnInit {
  foo = 10;
  test = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    timer(5000).subscribe(() => (this.foo = -1)); // In Constructor

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        console.log(params.special);
        this.test = params.special;
      }
    });
  }

  ngOnInit() {
  }

}
