import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardsService } from './cards.service';

describe('CardsService', () => {
  let service: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardsService]
    });
  });

  it('should be created', () => {
    const service: CardsService = TestBed.get(CardsService);
    expect(service).toBeTruthy();
  });
});
