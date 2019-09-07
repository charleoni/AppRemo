import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesPage } from './variables.page';

describe('VariablesPage', () => {
  let component: VariablesPage;
  let fixture: ComponentFixture<VariablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
