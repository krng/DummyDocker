import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <button (click)="fetchMessage()" [disabled]="loading">Get Message from Backend</button>
      <p *ngIf="message">{{ message }}</p>
    </div>
  `
})
export class MessageComponent {
  message: string | null = null;
  loading = false;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  fetchMessage() {
    if (this.loading) return;
    this.loading = true;
    this.api.getMessage().subscribe({
      next: res => {
        this.message = res.message;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.message = null;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
