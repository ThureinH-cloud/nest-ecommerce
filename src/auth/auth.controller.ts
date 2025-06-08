import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import {  SignUpAuthDto } from './dto/sign-up-auth.dto';
import { SignInAuthDto } from './dto/sign-in-auth.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
 async signUp(@Body() createAuthDto: SignUpAuthDto) {
    const accessToken=await this.authService.signUp(createAuthDto);
    return {
      message:"Sign Up Success",
      data:accessToken
    }
  }
  // @Post()
  // signIn(@Body() createAuthDto: SignInAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
