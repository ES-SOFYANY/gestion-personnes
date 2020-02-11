import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './personEntity';
import { Repository } from 'typeorm';
import { PersonDto } from './personDto';
import { SpecialCharactersException } from '../exeptions/special.characters.exeption';

@Injectable()
export class PersonsService {

    constructor(
        @InjectRepository(PersonEntity)
        private readonly personRepository: Repository<PersonEntity>,
    ) {
    }

    createPerson(personDTO: PersonDto) {

        if (personDTO.fullname === 'Abdo') {
            throw new SpecialCharactersException();
        }
        return this.personRepository.save(personDTO);
    }

    async getOnePerson(id: number) {
        try {
            return await this.personRepository.findOneOrFail({id});
        } catch (e) {
            throw new NotFoundException(e);
        }
    }

    getAllPersons() {
        return this.personRepository.find();
    }

    updatePerson(id: number, personDTO: PersonDto) {
        return this.personRepository.update(id, personDTO);
    }

    deletePerson(id: number) {
        return this.personRepository.delete(id);
    }
}
