import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title:string = "Learn How to Code with IronHack :)";
  image:string = "http://www.nipper.thedarkterritory.com/screens/blahhh1.jpg"
  description:string = "lorem ipsum dolor blah blah blah"

  constructor() { }

  ngOnInit() {
  }

}
