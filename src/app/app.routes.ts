import { Routes } from '@angular/router';
import { CreateDonkeyComponent } from './create-donkey/create-donkey.component';
import { ListDonkeyComponent } from './list-donkey/list-donkey.component';

export const routes: Routes = [
  { path: 'create', component: CreateDonkeyComponent },
  { path: '', component: ListDonkeyComponent },
];
