import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layaout } from './shared/presentation/components/layaout/layaout';

@Component({
  imports: [RouterOutlet, Layaout],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('news-api');
}
