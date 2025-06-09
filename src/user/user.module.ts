import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from 'src/role/role.module';
import { RoleService } from 'src/role/role.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule,
    ConfigModule,
    RoleModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports:[
    UserModule
  ]
})
export class UserModule {}
