import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevRowComponent } from './dev-row.component';

describe('DevRowComponent', () => {
  let component: DevRowComponent;
  let fixture: ComponentFixture<DevRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
