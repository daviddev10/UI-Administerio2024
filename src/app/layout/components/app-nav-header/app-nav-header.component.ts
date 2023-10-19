import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-nav-header',
  templateUrl: './app-nav-header.component.html',
  styleUrls: ['./app-nav-header.component.scss']
})
export class AppNavHeaderComponent implements OnInit {

  @Input() isCollapsed = false;
  @Output() onChangeCollapsed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
