import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmanderPage } from './charmander.page';

describe('CharmanderPage', () => {
  let component: CharmanderPage;
  let fixture: ComponentFixture<CharmanderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharmanderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharmanderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
