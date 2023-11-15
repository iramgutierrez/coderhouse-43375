import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from '../schemas/users.schema';
import { Model } from 'mongoose';

import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  find() {
    return this.userModel.find();
  }
}
