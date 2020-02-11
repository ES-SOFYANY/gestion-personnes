import { HttpException, HttpStatus } from '@nestjs/common';

export class SpecialCharactersException extends HttpException {
    constructor() {
        super('les caractères spéciaux ne sont pas autorisés', HttpStatus.BAD_REQUEST);
    }
}
