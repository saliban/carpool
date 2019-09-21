import { Entity, OneToMany, ManyToOne, Column } from 'typeorm';

import { BaseEntity } from './base.entity';
import { Driver } from './driver.entity';
import { Passenger } from './passenger.entity';
import { Event } from './event.entity';

@Entity()
export class Carpool extends BaseEntity {
    @Column({ nullable: true, length: 200 })
    public name: string;

    @Column()
    public eventId: string;

    @ManyToOne(type => Event)
    public event: Event;

    @OneToMany(type => Driver, driver => driver.carpool)
    public drivers: Driver[];

    @OneToMany(type => Passenger, passenger => passenger.carpool)
    public passengers: Passenger[];
}
