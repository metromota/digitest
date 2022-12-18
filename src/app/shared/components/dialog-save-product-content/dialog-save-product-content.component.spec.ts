import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaveProductContentComponent } from './dialog-save-product-content.component';

describe('DialogSaveProductContentComponent', () => {
  let component: DialogSaveProductContentComponent;
  let fixture: ComponentFixture<DialogSaveProductContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSaveProductContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSaveProductContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
