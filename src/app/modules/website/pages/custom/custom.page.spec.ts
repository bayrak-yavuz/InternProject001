import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPage } from './custom.page';

describe('CustomPage', () => {
  let component: CustomPage;
  let fixture: ComponentFixture<CustomPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
