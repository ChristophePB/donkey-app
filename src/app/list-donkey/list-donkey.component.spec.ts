import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonkeyComponent } from './list-donkey.component';

describe('ListDonkeyComponent', () => {
  let component: ListDonkeyComponent;
  let fixture: ComponentFixture<ListDonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDonkeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
