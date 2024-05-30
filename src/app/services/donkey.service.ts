import { Injectable } from '@angular/core';

interface Donkey {
  name: string;
  origin: string;
  birthdate: string;
  photo: string;
}

@Injectable({ providedIn: 'root' })
export class DonkeyService {
  private donkeys: Donkey[] = [];

  getDonkeys(): Donkey[] {
    return this.donkeys;
  }

  addDonkey(donkey: Donkey) {
    this.donkeys.push(donkey);
  }

  adoptDonkey(donkey: Donkey) {
    this.donkeys = this.donkeys.filter(d => d !== donkey);
  }
}
