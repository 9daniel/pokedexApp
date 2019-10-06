import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquirtlePage } from './squirtle.page';

describe('SquirtlePage', () => {
  let component: SquirtlePage;
  let fixture: ComponentFixture<SquirtlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquirtlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquirtlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
