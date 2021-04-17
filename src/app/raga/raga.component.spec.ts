import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagaComponent } from './raga.component';

describe('RagaComponent', () => {
  let component: RagaComponent;
  let fixture: ComponentFixture<RagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
