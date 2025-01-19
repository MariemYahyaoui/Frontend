import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcomponentComponent } from './artcomponent.component';

describe('ArtcomponentComponent', () => {
  let component: ArtcomponentComponent;
  let fixture: ComponentFixture<ArtcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
