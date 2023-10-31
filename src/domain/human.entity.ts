import { IsNotEmpty } from 'class-validator';
import { v4 as uuid } from 'uuid';
import { OptionalGuid } from './base.entity';

export class HumanDto {
  @IsNotEmpty()
  guid: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  middleName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  age: number;
}

export class Human extends HumanDto {
  static fromDto(dto: OptionalGuid<HumanDto>): Human {
    const human = new Human();
    human.guid = dto.guid || uuid();
    human.firstName = dto.firstName;
    human.middleName = dto.middleName;
    human.lastName = dto.lastName;
    human.age = dto.age;

    return human;
  }

  getFullName(): string {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  toDto(): HumanDto {
    return {
      guid: this.guid,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      age: this.age,
    };
  }
}
