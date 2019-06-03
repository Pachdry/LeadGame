import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Http ,Response ,Headers, RequestOptions} from '@angular/http';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  validations_form: FormGroup;
  genders: Array<string>;
  ageRanges: Array<string>;
  incomeRanges: Array<string>;
  age: string;


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private http: Http

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
    this.validations_form = this.formBuilder.group({
      age: new FormControl('', Validators.required),
      income: new FormControl('', Validators.required),
    });
    //this.age = new FormControl(this.ageRanges[0])
  }

  onSubmit(values){
    console.log(values);

    this.http.get('http://localhost:5000/calculateoffer',{params: values}).subscribe((response) => {
      // console.log(response.json());

      let navigationExtras: NavigationExtras = {
          queryParams: {
            special: response.json()
          }
        };

      this.router.navigate(["/spinner"],navigationExtras);
    });
  }
}
