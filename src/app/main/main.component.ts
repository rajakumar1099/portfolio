import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public faIcons = {
    linkedIn: faLinkedin,
    github: faGithub,
    twitter: faTwitter,
    instagram: faInstagram,
    email: faInstagram
  }
  constructor() { }

  ngOnInit(): void {
  }

}
