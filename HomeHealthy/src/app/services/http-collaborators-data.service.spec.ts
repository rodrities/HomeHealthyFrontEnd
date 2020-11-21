import { TestBed } from '@angular/core/testing';

import { HttpCollaboratosDataService } from './http-collaborators-data.service';

describe('HttpCollaboratosDataService', () => {
  let service: HttpCollaboratosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCollaboratosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
