import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  genders: Array<string>;
  ageRanges: Array<string>;
  incomeRanges: Array<string>;


  constructor(
    private router: Router
) {}

   ngOnInit() {

     this.genders = [
        "Male",
        "Female"
     ];

    this.ageRanges = [
        "18-25",
        "26-35",
        "36-45",
        "46-60",
        "60+"
    ];

    this.incomeRanges = [
        "$25k or less",
        "$25k to $50k",
        "$50k to $75k",
        "$75k to $100k",
        "$100k+"
    ];
  }

  onSubmit(values){
      console.log(values);
      this.router.navigate(["/spinner"]);
    }
}
