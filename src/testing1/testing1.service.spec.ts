import { Test, TestingModule } from '@nestjs/testing';
import { Testing1Service } from './testing1.service';

describe('Testing1Service', () => {
  let service: Testing1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Testing1Service],
    }).compile();

    service = module.get<Testing1Service>(Testing1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
