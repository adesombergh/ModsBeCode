import { TestBed, inject } from '@angular/core/testing';

import { ThreeEditorService } from './three-editor.service';

describe('ThreeEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreeEditorService]
    });
  });

  it('should be created', inject([ThreeEditorService], (service: ThreeEditorService) => {
    expect(service).toBeTruthy();
  }));
});
