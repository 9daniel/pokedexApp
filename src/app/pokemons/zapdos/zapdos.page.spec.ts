import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapdosPage } from './zapdos.page';

describe('ZapdosPage', () => {
  let component: ZapdosPage;
  let fixture: ComponentFixture<ZapdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapdosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
