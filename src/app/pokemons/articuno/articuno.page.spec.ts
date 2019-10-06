import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticunoPage } from './articuno.page';

describe('ArticunoPage', () => {
  let component: ArticunoPage;
  let fixture: ComponentFixture<ArticunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
