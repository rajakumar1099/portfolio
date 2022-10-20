import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  public icons = {
    github: faGithub,
    desktop: faDesktop,
  };

  public projects = [
    {
      name: '1. Letgo Clone',
      description:
        'This project is built using Angular, Express.js, RxJX, NgRX, HTML5, CSS3 and Bootstrap. This Site is Fully Responsive',
      github: 'https://github.com/rajakumar1099/letgo_angular',
      live: 'https://joysale-d8633.web.app/',
    },
  ];
  ngOnInit(): void {}
}
