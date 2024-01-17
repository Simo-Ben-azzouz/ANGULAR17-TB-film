import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSideNavComponent } from './d-side-nav.component';

describe('DSideNavComponent', () => {
  let component: DSideNavComponent;
  let fixture: ComponentFixture<DSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
