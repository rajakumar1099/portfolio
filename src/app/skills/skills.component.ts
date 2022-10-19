import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  public skills = [
    {
      name: 'Html',
      icon: 'assets/svg/html5.svg',
    },
    {
      name: 'Css',
      icon: 'assets/svg/css3.svg',
    },
    {
      name: 'Angular',
      icon: 'assets/svg/angularjs.svg',
    },
    {
      name: 'JavaScript',
      icon: 'assets/svg/javascript.svg',
    },
    {
      name: 'TypeScript',
      icon: 'assets/svg/typescript.svg',
    },
    {
      name: 'Nodejs',
      icon: 'assets/svg/nodejs.svg',
    },
    {
      name: 'Redux',
      icon: 'assets/svg/redux.svg',
    },
    {
      name: 'Git',
      icon: 'assets/svg/git.svg',
    },
  ];
  ngOnInit(): void {}
}
