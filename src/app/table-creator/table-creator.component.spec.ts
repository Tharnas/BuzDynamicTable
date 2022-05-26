import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreatorComponent } from './table-creator.component';

describe('TableCreatorComponent', () => {
  let component: TableCreatorComponent;
  let fixture: ComponentFixture<TableCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
