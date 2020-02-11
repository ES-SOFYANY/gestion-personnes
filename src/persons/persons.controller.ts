import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonDto } from './personDto';

@Controller('persons')
export class PersonsController {

    constructor(private personsService: PersonsService) {
    }

    @Post()
    createPerson(@Body() personDTO: PersonDto) {
        return this.personsService.createPerson(personDTO);
    }

    @Get(':id')
    async getOnePerson(@Param('id') id: number) {
        const onePerson = await this.personsService.getOnePerson(id);
        return onePerson;
    }

    @Get()
    getAllPersons() {
        return this.personsService.getAllPersons();
    }

    @Put(':id')
    updatePerson(@Param('id') id: number, @Body() personDTO: PersonDto) {
        return this.personsService.updatePerson(id, personDTO);
    }

    @Delete(':id')
    deletePerson(@Param('id') id: number) {
        return this.personsService.deletePerson(id);
    }

}
