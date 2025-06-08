import { Injectable } from '@nestjs/common';
import {  SignUpAuthDto } from './dto/sign-up-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}
  async signUp(createAuthDto: SignUpAuthDto) {
    const user=await this.userService.create(createAuthDto);
    const payload={
      id:user.id,
      email:user.email,
      firstName:user.firstName,
      lastName:user.lastName,
      isActive:user.isActive,
    }
    const accessToken=await this.jwtService.signAsync(payload);
    return accessToken;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
