import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        PORT: Joi.number().port().required()
      })
    }),
    DatabaseModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
