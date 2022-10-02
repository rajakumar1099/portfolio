import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faMailchimp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public contact = [
    {
      title: 'LinkedIn',
      icon: faLinkedin,
      href: 'https://www.linkedin.com/in/rajakumarsaravanan/',
    },
    {
      title: 'Github',
      icon: faGithub,
      href: 'https://github.com/rajakumar1099/',
    },
    {
      title: 'Twitter',
      icon: faTwitter,
      href: 'https://www.linkedin.com/in/rajakumarsaravanan/',
    },
    {
      title: 'Instagram',
      icon: faInstagram,
      href: 'https://www.linkedin.com/in/rajakumarsaravanan/',
    },
    {
      title: 'Mail',
      icon: faMailchimp,
      href: 'https://www.linkedin.com/in/rajakumarsaravanan/',
    },
  ];
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
      name: 'JavaScript',
      icon: 'assets/svg/javascript.svg',
    },
    {
      name: 'Git',
      icon: 'assets/svg/git.svg',
    },
    {
      name: 'Nodejs',
      icon: 'assets/svg/nodejs.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
