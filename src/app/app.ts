import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCard, MatCardHeader } from '@angular/material/card';
import { UserState } from './user/user-state';

@Component({
  imports: [RouterOutlet, MatCard, MatCardHeader],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  providers: [UserState],
})
export class App {}
