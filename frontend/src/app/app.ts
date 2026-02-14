import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, MessageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
