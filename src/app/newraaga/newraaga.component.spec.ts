import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewraagaComponent } from './newraaga.component';

describe('NewraagaComponent', () => {
  let component: NewraagaComponent;
  let fixture: ComponentFixture<NewraagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewraagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewraagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
