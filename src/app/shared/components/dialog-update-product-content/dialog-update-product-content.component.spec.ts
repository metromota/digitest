import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateProductContentComponent } from './dialog-update-product-content.component';

describe('DialogUpdateProductContentComponent', () => {
  let component: DialogUpdateProductContentComponent;
  let fixture: ComponentFixture<DialogUpdateProductContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateProductContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateProductContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
