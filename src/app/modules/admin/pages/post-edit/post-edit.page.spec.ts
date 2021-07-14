import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditPage } from './post-edit.page';

describe('PostEditPage', () => {
  let component: PostEditPage;
  let fixture: ComponentFixture<PostEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEditPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
