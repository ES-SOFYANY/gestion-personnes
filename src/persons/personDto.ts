import { IsInt, IsString, Matches, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

const SPECIAL_CHARACTERS_REGEX = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;

export class PersonDto {

    @IsString()
    @ApiProperty()
    @Matches(SPECIAL_CHARACTERS_REGEX, {message: 'le champ fullname ne doit pas contenir les caractères spéciaux '})
    fullname: string;

    @ApiProperty()
    @IsInt()
    @Max(20)
    age: number;

    @ApiProperty()
    birthDate: Date;
}
