import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MengapaComponent } from './mengapa.component';

describe('MengapaComponent', () => {
  let component: MengapaComponent;
  let fixture: ComponentFixture<MengapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MengapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MengapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
