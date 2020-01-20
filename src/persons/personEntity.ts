import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class PersonEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    age: number;

    @Column()
    birthDate: Date;

    @CreateDateColumn()
    crationDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}
