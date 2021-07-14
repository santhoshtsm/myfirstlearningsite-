import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course = [
    {'id':1,'name':'Learn Javascript','description':'$50','image':'../../assets/javascript.jpg'},
    {'id':2,'name':'Learn Angular','description':'$100','image':'../../assets/angular.png'},
    {'id':3,'name':'Learn Typescript','description':'$150','image':'../../assets/type.png'},
    {'id':3,'name':'Learn React','description':'$120','image':'../../assets/rea4.png'}
  ]

}
