import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/cores/guards/auth.guard';
import { Request } from 'express';
import { CurrentUser } from 'src/cores/decorators/current-user.decorator';
import { SignUpAuthDto } from 'src/auth/dto/sign-up-auth.dto';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: SignUpAuthDto) {
    return this.userService.create(createUserDto);
  }

  @Get("/me")
  @UseGuards(AuthGuard)
  getCurrentUser(
    @CurrentUser() user
  ){
    return user;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
