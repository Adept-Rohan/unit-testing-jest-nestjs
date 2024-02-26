import { PartialType } from '@nestjs/mapped-types';
import { CreateTesting1Dto } from './create-testing1.dto';

export class UpdateTesting1Dto extends PartialType(CreateTesting1Dto) {}
