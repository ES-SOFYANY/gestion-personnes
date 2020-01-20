import { HttpException, HttpStatus } from '@nestjs/common';

export class SpecialCharactersException extends HttpException {
    constructor() {
        super('les caractères spéciaux ne sont pas autorisé', HttpStatus.BAD_REQUEST);
    }
}
