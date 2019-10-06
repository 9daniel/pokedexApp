import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GengarPage } from './gengar.page';

describe('GengarPage', () => {
  let component: GengarPage;
  let fixture: ComponentFixture<GengarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GengarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GengarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
