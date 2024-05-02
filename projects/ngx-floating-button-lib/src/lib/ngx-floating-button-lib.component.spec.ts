import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFloatingButtonLibComponent } from './ngx-floating-button-lib.component';

describe('NgxFloatingButtonLibComponent', () => {
  let component: NgxFloatingButtonLibComponent;
  let fixture: ComponentFixture<NgxFloatingButtonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFloatingButtonLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFloatingButtonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
