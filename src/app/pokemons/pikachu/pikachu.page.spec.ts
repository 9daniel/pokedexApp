import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PikachuPage } from './pikachu.page';

describe('PikachuPage', () => {
  let component: PikachuPage;
  let fixture: ComponentFixture<PikachuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PikachuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PikachuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
