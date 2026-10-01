import { Test, TestingModule } from '@nestjs/testing';
import { AppliedJobController } from './applied-job.controller.js';
import { AppliedJobService } from './applied-job.service.js';

describe('AppliedJobController', () => {
  let controller: AppliedJobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppliedJobController],
      providers: [AppliedJobService],
    }).compile();

    controller = module.get<AppliedJobController>(AppliedJobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
