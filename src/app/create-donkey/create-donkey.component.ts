import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DonkeyService } from '../services/donkey.service';

@Component({
  selector: 'app-create-donkey',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-donkey.component.html',
  styleUrls: ['./create-donkey.component.css']
})
export class CreateDonkeyComponent {
  donkeyForm: FormGroup;

  constructor(private fb: FormBuilder, private donkeyService: DonkeyService) {
    this.donkeyForm = this.fb.group({
      name: ['', Validators.required],
      origin: ['', Validators.required],
      birthdate: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.donkeyForm.valid) {
      const newDonkey = this.donkeyForm.value;
      this.donkeyService.addDonkey(newDonkey);
      this.donkeyForm.reset();
    }
  }
}
