import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRaagaComponent } from './update-raaga.component';

describe('UpdateRaagaComponent', () => {
  let component: UpdateRaagaComponent;
  let fixture: ComponentFixture<UpdateRaagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRaagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRaagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
