import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.db.user.create({ data });
  }
}
