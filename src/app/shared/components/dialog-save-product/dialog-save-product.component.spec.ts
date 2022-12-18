import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaveProductComponent } from './dialog-save-product.component';

describe('DialogSaveProductComponent', () => {
  let component: DialogSaveProductComponent;
  let fixture: ComponentFixture<DialogSaveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSaveProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSaveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
