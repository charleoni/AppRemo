import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegarPage } from './navegar.page';

describe('NavegarPage', () => {
  let component: NavegarPage;
  let fixture: ComponentFixture<NavegarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
