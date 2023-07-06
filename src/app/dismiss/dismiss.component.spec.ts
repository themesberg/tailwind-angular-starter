import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissComponent } from './dismiss.component';

describe('DismissComponent', () => {
  let component: DismissComponent;
  let fixture: ComponentFixture<DismissComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DismissComponent]
    });
    fixture = TestBed.createComponent(DismissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
