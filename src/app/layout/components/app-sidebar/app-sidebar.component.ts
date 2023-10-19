import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {

  @Input() isCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
