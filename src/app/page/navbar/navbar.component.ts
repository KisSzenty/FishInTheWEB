import { Component, OnInit, Input } from '@angular/core';
import { faFish } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() opacity: number = 1;

  faFish = faFish;

  constructor() { }

  ngOnInit() {
  }

}
