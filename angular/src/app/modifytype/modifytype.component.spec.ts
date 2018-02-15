import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifytypeComponent } from './modifytype.component';

describe('ModifytypeComponent', () => {
  let component: ModifytypeComponent;
  let fixture: ComponentFixture<ModifytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
