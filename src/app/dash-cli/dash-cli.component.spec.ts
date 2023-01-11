import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCliComponent } from './dash-cli.component';

describe('DashCliComponent', () => {
  let component: DashCliComponent;
  let fixture: ComponentFixture<DashCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
