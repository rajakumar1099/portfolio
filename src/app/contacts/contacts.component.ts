import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }
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
      href: 'https://twitter.com/rajakumar1099/',
    },
    {
      title: 'Instagram',
      icon: faInstagram,
      href: 'https://www.instagram.com/__rajakumar__/',
    },
    {
      title: 'Mail',
      icon: faEnvelope,
      href: 'mailto:rajakumarsaravanan@gmail.com',
    },
  ];
  ngOnInit(): void {
  }

}
