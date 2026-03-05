import { Component, OnInit } from '@angular/core';
import { PlayerService } from './core/services/player.service';
import { Player } from './models/player.model';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h1>Players:</h1>

    @if (players$ | async; as players) {
      @for (player of players; track player.id) {
        <p>ID: {{ player.id }}</p>
        <p>Name: {{ player.name }}</p>
        <p>Firstname: {{ player.firstname }}</p>
        <hr />
      }
    }
  `
})

export class AppComponent implements OnInit {

  players$: Observable<Player[] | null> = of(null);

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.players$ = this.playerService.getPlayers()
  }
}
