import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionBoardComponent } from './nutrition-board.component';

describe('NutritionBoardComponent', () => {
  let component: NutritionBoardComponent;
  let fixture: ComponentFixture<NutritionBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
