import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';
import { User } from './models/user.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h1>User</h1>

    @if (user$ | async; as user) {
      <p>ID: {{ user.id }}</p>
      <p>Name: {{ user.name }}</p>
    }
  `
})
export class AppComponent implements OnInit {

  user$ = this.userService.getUser();

  constructor(private userService: UserService) {}

  ngOnInit() {}
}