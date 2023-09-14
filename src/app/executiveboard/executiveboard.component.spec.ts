import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveboardComponent } from './executiveboard.component';

describe('ExecutiveboardComponent', () => {
  let component: ExecutiveboardComponent;
  let fixture: ComponentFixture<ExecutiveboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
