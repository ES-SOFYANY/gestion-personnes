import { IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PersonDTO {

    @IsString()
    @Matches(/^[A-Za-z]+$/)
    @ApiProperty()
    fullname: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    birthDate: Date;
}
