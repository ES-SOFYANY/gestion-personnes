import { IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PersonDto {

    @IsString()
    @Matches(/^[A-Za-z]+$/)
    @ApiProperty()
    fullname: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    birthDate: Date;
}
