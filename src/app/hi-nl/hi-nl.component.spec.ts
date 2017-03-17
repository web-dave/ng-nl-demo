import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiNlComponent } from './hi-nl.component';

describe('HiNlComponent', () => {
  let component: HiNlComponent;
  let fixture: ComponentFixture<HiNlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiNlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiNlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
