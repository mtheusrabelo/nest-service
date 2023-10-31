import { Injectable } from '@nestjs/common';
import { Human } from '../../domain/human.entity';

@Injectable()
export class HumanDatabase {
  getAll(): Human[] {
    // select * from ...

    const human1 = Human.fromDto({
      firstName: 'John',
      middleName: 'Doe',
      lastName: 'Smith',
      age: 25,
    });

    const human2 = Human.fromDto({
      firstName: 'Mary',
      middleName: 'Doe',
      lastName: 'Smith',
      age: 26,
    });

    return [human1, human2];
  }

  // eslint-disable-next-line
  insert(_human: Human): void {
    // insert into ...
    return;
  }
}
