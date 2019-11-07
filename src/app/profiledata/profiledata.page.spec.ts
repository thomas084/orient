import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledataPage } from './profiledata.page';

describe('ProfiledataPage', () => {
  let component: ProfiledataPage;
  let fixture: ComponentFixture<ProfiledataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiledataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
