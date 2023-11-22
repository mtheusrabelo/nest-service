import { Injectable } from '@nestjs/common';
import { HumanRepository } from '../../domain/repositories/human.repository';
import { HumanDto } from '../../domain/human.entity';

@Injectable()
export class GetHelloWorldCollaboration {
  constructor(private readonly humanRepository: HumanRepository) {}

  run(): HumanDto[] {
    const humans = this.humanRepository.getAll();
    return humans.map((human) => human.toDto());

    // add comment
  }
}
