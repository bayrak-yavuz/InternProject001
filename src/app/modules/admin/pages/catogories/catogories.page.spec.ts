import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogoriesPage } from './catogories.page';

describe('CatogoriesPage', () => {
  let component: CatogoriesPage;
  let fixture: ComponentFixture<CatogoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogoriesPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
