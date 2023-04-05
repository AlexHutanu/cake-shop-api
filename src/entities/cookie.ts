import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Cookie {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    type: string
    @Column()
    name: string
    @Column()
    image: string
    @Column()
    composition: string
    @Column()
    recommendation: string
    @Column()
    price: number
}