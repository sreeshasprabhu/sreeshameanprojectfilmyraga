import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagasListComponent } from './ragas-list.component';

describe('RagasListComponent', () => {
  let component: RagasListComponent;
  let fixture: ComponentFixture<RagasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RagasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
