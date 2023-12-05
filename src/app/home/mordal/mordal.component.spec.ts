import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MordalComponent } from './mordal.component';

describe('MordalComponent', () => {
  let component: MordalComponent;
  let fixture: ComponentFixture<MordalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MordalComponent]
    });
    fixture = TestBed.createComponent(MordalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
