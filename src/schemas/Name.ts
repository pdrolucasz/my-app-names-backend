import {
    ObjectID,
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ObjectIdColumn,
} from 'typeorm'

@Entity('names')
class Name {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default Name
