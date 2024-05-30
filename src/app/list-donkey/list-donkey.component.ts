import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDonkeyComponent } from '../user-donkey/user-donkey.component';
import { DonkeyService } from '../services/donkey.service';

interface Donkey {
  name: string;
  origin: string;
  birthdate: string;
  photo: string;
}

@Component({
  selector: 'app-list-donkey',
  standalone: true,
  imports: [CommonModule, UserDonkeyComponent],
  templateUrl: './list-donkey.component.html',
  styleUrls: ['./list-donkey.component.css']
})
export class ListDonkeyComponent implements OnInit {
  donkeys: Donkey[] = [];
  userDonkeys: Donkey[] = [];

  constructor(private donkeyService: DonkeyService) {}

  ngOnInit() {
    this.donkeys = this.donkeyService.getDonkeys();
  }

  adoptDonkey(donkey: Donkey) {
    this.userDonkeys.push(donkey);
    this.donkeyService.adoptDonkey(donkey);
    this.donkeys = this.donkeyService.getDonkeys();
  }
}
