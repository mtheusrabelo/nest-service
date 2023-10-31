import { Module } from '@nestjs/common';
import { GetHelloWorldCollaboration } from '../application/collaborations/hello-world.collaboration';
import { HelloWorldHandler } from '../infrastructure/handlers/hello-world.handler';
import { HumanDatabase } from './databases/human.database';
import { HumanRepository } from '../domain/repositories/human.repository';

const collaborations = [GetHelloWorldCollaboration];
const handlers = [HelloWorldHandler];
const repositories = [HumanRepository];
const databases = [HumanDatabase];

@Module({
  imports: [],
  controllers: [...handlers],
  providers: [...databases, ...repositories, ...collaborations],
})
export class AppModule {}
