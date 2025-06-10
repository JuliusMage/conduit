import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RosterService, RosterRO } from './roster.service';

@ApiBearerAuth()
@ApiTags('roster')
@Controller('roster')
export class RosterController {
  constructor(private readonly rosterService: RosterService) {}

  @Get()
  async findAll(): Promise<RosterRO> {
    return this.rosterService.findAll();
  }
}
