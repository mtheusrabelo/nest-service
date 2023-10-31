import { Injectable } from '@nestjs/common';
import { Human } from '../human.entity';
import { HumanDatabase } from '../../infrastructure/databases/human.database';

@Injectable()
export class HumanRepository {
  constructor(private readonly humanDatabase: HumanDatabase) {}

  getAll(): Human[] {
    return this.humanDatabase.getAll();
  }

  save(human: Human): void {
    this.humanDatabase.insert(human);
  }
}
