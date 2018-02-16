import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetypeComponent } from './deletetype.component';

describe('DeletetypeComponent', () => {
  let component: DeletetypeComponent;
  let fixture: ComponentFixture<DeletetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
