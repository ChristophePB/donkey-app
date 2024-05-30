import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/create">Create Donkey</a>
    </nav>
  `,
  styles: [`
    nav {
      display: flex;
      gap: 10px;
    }
  `]
})
export class MenuComponent {}
