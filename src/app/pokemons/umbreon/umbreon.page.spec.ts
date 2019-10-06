import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbreonPage } from './umbreon.page';

describe('UmbreonPage', () => {
  let component: UmbreonPage;
  let fixture: ComponentFixture<UmbreonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbreonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbreonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
