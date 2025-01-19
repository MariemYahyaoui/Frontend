import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticscomponenComponent } from './politicscomponen.component';

describe('PoliticscomponenComponent', () => {
  let component: PoliticscomponenComponent;
  let fixture: ComponentFixture<PoliticscomponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticscomponenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticscomponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
