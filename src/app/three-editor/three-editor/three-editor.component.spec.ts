import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeEditorComponent } from './three-editor.component';

describe('ThreeEditorComponent', () => {
  let component: ThreeEditorComponent;
  let fixture: ComponentFixture<ThreeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
