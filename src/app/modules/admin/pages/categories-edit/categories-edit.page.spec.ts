import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesEditPage } from './categories-edit.page';

describe('CategoriesEditPage', () => {
  let component: CategoriesEditPage;
  let fixture: ComponentFixture<CategoriesEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesEditPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
