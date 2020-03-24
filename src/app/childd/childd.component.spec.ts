import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddComponent } from './childd.component';

describe('ChilddComponent', () => {
  let component: ChilddComponent;
  let fixture: ComponentFixture<ChilddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
