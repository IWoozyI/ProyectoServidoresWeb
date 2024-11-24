import { Test, TestingModule } from '@nestjs/testing';
import { PublicacionResolver } from './publicacion.resolver';
import { PublicacionService } from './publicacion.service';

describe('PublicacionResolver', () => {
  let resolver: PublicacionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicacionResolver, PublicacionService],
    }).compile();

    resolver = module.get<PublicacionResolver>(PublicacionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
