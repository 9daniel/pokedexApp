import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChikoritaPage } from './chikorita.page';

describe('ChikoritaPage', () => {
  let component: ChikoritaPage;
  let fixture: ComponentFixture<ChikoritaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChikoritaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChikoritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
