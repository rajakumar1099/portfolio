import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  public bio: string = "I'm a software engineer specialized in front end development for complex scalable web application. Currently focused on learning JavaScript Full Stack Web Development."
  ngOnInit(): void {}
}
