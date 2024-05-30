import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Donkey {
  name: string;
  origin: string;
  birthdate: string;
  photo: string;
}

@Component({
  selector: 'app-user-donkey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-donkey.component.html',
  styleUrls: ['./user-donkey.component.css']
})
export class UserDonkeyComponent {
  @Input() donkeys: Donkey[] = [];
}
