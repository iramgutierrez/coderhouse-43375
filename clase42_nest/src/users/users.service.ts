import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {
    // this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    /*const user = new User();
    user.id = this.users.length + 1;
    user.name = createUserDto.name;
    user.email = createUserDto.email;

    this.users.push(user);
    return user;*/
    return this.usersRepository.create(createUserDto);
  }

  findAll(limit: number) {
    return this.usersRepository.find();
  }

  /*findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return null;
    }

    user.name = updateUserDto.name || user.name;
    user.email = updateUserDto.email || user.email;

    return user;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      return null;
    }

    this.users.splice(userIndex, 1);
    return true;
  }*/
}
