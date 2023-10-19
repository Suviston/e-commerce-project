import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopnowComponent } from './shopnow.component';

describe('ShopnowComponent', () => {
  let component: ShopnowComponent;
  let fixture: ComponentFixture<ShopnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopnowComponent]
    });
    fixture = TestBed.createComponent(ShopnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
