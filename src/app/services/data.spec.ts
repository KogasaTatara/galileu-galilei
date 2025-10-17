import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { DataService } from './data';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
=======
import { Data } from './data';

describe('Data', () => {
  let service: Data;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data);
>>>>>>> origin/master
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
