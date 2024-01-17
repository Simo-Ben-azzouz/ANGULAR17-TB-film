import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMainComponent } from './d-main.component';

describe('DMainComponent', () => {
  let component: DMainComponent;
  let fixture: ComponentFixture<DMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
