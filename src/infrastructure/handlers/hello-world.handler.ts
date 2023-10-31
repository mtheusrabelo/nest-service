import { Controller, Get } from '@nestjs/common';
import { GetHelloWorldCollaboration } from '../../application/collaborations/hello-world.collaboration';
import { HumanDto } from '../../domain/human.entity';

@Controller()
export class HelloWorldHandler {
  constructor(private readonly collaboration: GetHelloWorldCollaboration) {}

  @Get()
  async run(): Promise<HumanDto[]> {
    return await this.collaboration.run();
  }
}
