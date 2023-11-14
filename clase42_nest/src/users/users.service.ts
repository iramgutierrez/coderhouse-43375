import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto): User {
    const user = new User();
    user.id = this.users.length + 1;
    user.name = createUserDto.name;
    user.email = createUserDto.email;

    this.users.push(user);
    return user;
  }

  findAll(limit: number) {
    return this.users.slice(0, limit);
  }

  findOne(id: number): User {
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
  }
}
