import { Test, TestingModule } from '@nestjs/testing';
import { Testing1Controller } from './testing1.controller';
import { Testing1Service } from './testing1.service';
import { Request, Response } from 'express';

describe('Testing1Controller', () => {
  let controller: Testing1Controller;

  const statusResponseMock = {
    send: jest.fn((x) => x),
  };

  const reuqestMock = {
    query: {},
  } as unknown as Request;
  const responseMock = {
    status: jest.fn((x) => statusResponseMock),
    send: jest.fn((x) => x),
  } as unknown as Response;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Testing1Controller],
      providers: [Testing1Service],
    }).compile();

    controller = module.get<Testing1Controller>(Testing1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getPayments', () => {
    it('should return a status code', () => {
      controller.getPayments(reuqestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(400);
      expect(statusResponseMock.send).toHaveBeenCalledWith({
        msg: 'Bad Request',
      });
    });
    it('should return a status code if the parameter is not empty', () => {
      reuqestMock.query = {
        totalCount: '1',
        page: '0',
      };
      controller.getPayments(reuqestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(200);
    });
  });
});
