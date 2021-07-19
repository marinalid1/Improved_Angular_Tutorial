import { Component, OnInit } from '@angular/core';
// 1:42:00 import UiService
import { UiService } from '../../services/ui.service';
// 1:42:30 import Subscription
import { Subscription } from 'rxjs';
// 1:58:00 import Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

// 22:00 add HeaderComponent
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  // 1:43:00 showAddTask boolean
  showAddTask: boolean = false;
  // 1:43:00 add subscription
  subscription: Subscription;

  // 1:42:15 add uiService to constructor to use it
  // 1:46:30 this.subscription = this.uiService
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
     // Unsubscribe to ensure no memory leaks
     this.subscription.unsubscribe();
   }

   // 30:00 add toggleAddTask(), console.log('toggle')
   // 1:43:30 replace console.log with uiServiceAddTask
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  // 1:59:00 add hasRoute, set equal to route
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
